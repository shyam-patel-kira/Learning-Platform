import express from "express";
import cors from "cors";
import writingTaskTwoSampleModel from "../Models/Writing_Task-2_sample.js";

import dotenv from "dotenv";
import jwa from "jwa";
import jwt from "jsonwebtoken";
import Inversoft from "passport-node-client";
// import jwt_decode from "jwt-decode";

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const writingTaskTwoSampleRouter = express.Router();
writingTaskTwoSampleRouter.use(cors());

writingTaskTwoSampleRouter.get(
  "/writing-task-2-sample/:sample_id&:my_heading",
  (req, res) => {
    writingTaskTwoSampleModel
      .find({
        sample_id: req.params.sample_id,
        my_heading: req.params.my_heading,
      })
      .then((doc) => {
        res.status(201).json({
          message: "Sample paper obtained successfully",
          results: doc,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  }
);

writingTaskTwoSampleRouter.post(
  "/writing-task-2-sample/:my_heading/:sample_id",
  (req, res) => {
    const sample_id = req.params.sample_id;
    const my_heading = req.params.my_heading;
    const title = req.body.title;
    const question_heading = req.body.question_heading;
    const para1 = req.body.para1;
    const para2 = req.body.para2;
    const para3 = req.body.para3;
    const para4 = req.body.para4;

    const writingTaskTwoSample = new writingTaskTwoSampleModel({
      sample_id: sample_id,
      title: title,
      question_heading: question_heading,
      my_heading: my_heading,
      para1: para1,
      para2: para2,
      para3: para3,
      para4: para4,
    });
    writingTaskTwoSample
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
  }
);

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

export default writingTaskTwoSampleRouter;
