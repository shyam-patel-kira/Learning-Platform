import express from "express";

import readingModel from "../Models/Reading.js";
import userReadingAnswersModel from "../Models/Reading_user_answers.js";
import dotenv from "dotenv";
import jwa from "jwa";
import jwt from "jsonwebtoken";
import Inversoft from "passport-node-client";
// import { _authorized } from "./functions.js"
// import jwt_decode from "jwt-decode";

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const readingRouter = express.Router();

//API for displaying question
readingRouter.get("/reading/test/:test_id", (req, res) => {
  const decodedJWT = _decodeJWT(req);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }

  readingModel
    .find({ test_id: req.params.test_id })
    .then((doc) => {
      res.status(201).json({
        message: "Test obtained successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

readingRouter.post("/reading/test/user-answers/:test_id", (req, res) => {
  const test_id = req.params.test_id;
  const answers = req.body.answers;

  const userAnswers = new userReadingAnswersModel({
    test_id: test_id,
    answers: answers,
  });
  userAnswers
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Test submitted successfully.",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

/**
 * Decode the JWT by extracting the JWT from the HTTP request header.
 *
 * @param {Object} req The HTTP request
 * @returns {Object} the decoded JWT or null if the JWT was not found in the request or it is invalid
 */
function _decodeJWT(req) {
  const authorization = req.header("Authorization");
  console.log(authorization);
  if (authorization === null || typeof authorization === "undefined") {
    return null;
  }

  const encodedJWT = authorization.substr("JWT ".length);
  console.log(encodedJWT);
  if (encodedJWT === null || typeof encodedJWT === "undefined") {
    return null;
  }
  console.log("Here");
  const x = decode(encodedJWT);
  console.log(x);
  return x;
  //return encodedJWT.decode(encodedJWT);
}

function decode(encodedJWT) {
  try {
    const parts = encodedJWT.split(".");
    if (parts.length !== 3) {
      return null;
    }
    console.log(parts);
    console.log("After Buffer ");
    const headerpre = Buffer.from(parts[0], "base64");
    console.log("header : " + headerpre);
    const payload = Buffer.from(parts[1], "base64");
    // console.log(payload.toString());
    //Verify header's something matches application
    // if () {}
    const header = JSON.parse(headerpre);
    let verified = false;
    const schema = header["alg"];
    console.log(schema);

    console.log(JWT_SECRET);

    switch (schema) {
      case "HS256":
        verified = jwa(schema).verify(
          parts[0] + "." + parts[1],
          parts[2],
          JWT_SECRET
        );
        break;
      case "RS384":
        verified = jwa(schema).verify(
          parts[0] + "." + parts[1],
          parts[2],
          JWT_SECRET
        );
        break;
      case "RS512":
        verified = jwa(schema).verify(
          parts[0] + "." + parts[1],
          parts[2],
          JWT_SECRET
        );
        break;
      default:
        verified = false;
    }
    console.log(verified);
    if (!verified) {
      return null;
    }

    const decodedJWT = JSON.parse(payload);
    const now = Math.round(new Date().getTime() / 1000);

    // Verify JWT has not expired
    if (decodedJWT.exp && decodedJWT.exp < now) {
      return null;
    }
    return decodedJWT;
  } catch (error) {
    //return null;
    throw error;
  }
}

function _authorized(decodedJWT, role) {
  if (decodedJWT === null) {
    return false;
  }
  // come up with an alternative for this
  if (!Inversoft.JWTManager.isValid(decodedJWT)) {
    return false;
  }
  console.log("Roles: " + role);
  // if (!jwt.assertIdentity(decodedJWT, 'roles', role)) {
  //     return false;
  // }
  if (
    jwt.verify(
      decodedJWT,
      JWT_SECRET,
      { role: "roles" },
      function (err, decoded) {
        console.log("verfied");
        return true;
      }
    )
  ) {
    return true;
  }
  //if (!jwt.assertIdentity(decodedJWT, ))
}


export default readingRouter;
