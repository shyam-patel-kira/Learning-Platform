import express from "express";
import cors from "cors";
import speakingModel from "../Models/Speaking.js";

import dotenv from "dotenv";
import jwa from "jwa";
import jwt from "jsonwebtoken";
import Inversoft from "passport-node-client";
// import jwt_decode from "jwt-decode";


dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const speakingRouter = express.Router();
speakingRouter.use(cors());

speakingRouter.get("/speaking/test/:test_id", (req, res) => {
  /* const decodedJWT = _decodeJWT(req);
  if (!_authorized(decodedJWT, "USER")) {
    console.log("Is not authorised");
    return res.json({ status: "Error", error: "Unauthorized user" });
  }
*/
  speakingModel
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

speakingRouter.post("/speaking/test/:test_id", (req, res) => {
  const test_id = req.params.test_id;
  const detail = req.body.detail;
  const topic1 = req.body.topic1;
  const topic2 = req.body.topic2;
  const topic3 = req.body.topic3;
  const q1 = req.body.q1;
  const q2 = req.body.q2;
  const q3 = req.body.q3;
  const q4 = req.body.q4;
  const q5 = req.body.q5;
  const q6 = req.body.q6;
  const q7 = req.body.q7;
  const q8 = req.body.q8;
  const q9 = req.body.q9;
  const q10 = req.body.q10;
  const q11 = req.body.q11;

  const speakingQuestions = new speakingModel({
    test_id: test_id,
    detail: detail,
    topic1: topic1,
    topic2: topic2,
    topic3: topic3,
    q1: q1,
    q2: q2,
    q3: q3,
    q4: q4,
    q5: q5,
    q6: q6,
    q7: q7,
    q8: q8,
    q9: q9,
    q10: q10,
    q11: q11,
  });
  speakingQuestions
    .save()
    .then((doc) => {
      res.status(201).json({
        message: "Questions obtained successfully.",
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

export default speakingRouter;
