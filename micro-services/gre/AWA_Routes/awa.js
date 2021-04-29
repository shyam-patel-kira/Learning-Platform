const express = require("express" );
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwa = require("jwa");
const jwt = require("jsonwebtoken");
const Inversoft = require("passport-node-client");

const _decodeJWT = require("../decodeJWTFunction.js");
const _authorized = require("../authorizationFunction.js");
// const jwt_decode = require( "jwt-decode" );

dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

const awa = express.Router();
awa.use(cors());

require("../Models/AWA.js");
const AWA = mongoose.model("AWA");

awa.get(
  "/awa/:sample_id&:my_heading",
  (req, res) => {
    awa
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

awa.post(
  "/awa/:my_heading/:sample_id",
  (req, res) => {
    const sample_id = req.params.sample_id;
    const my_heading = req.params.my_heading;
    const title = req.body.title;
    const question_heading = req.body.question_heading;
    const para1 = req.body.para1;
    const para2 = req.body.para2;
    const para3 = req.body.para3;
    const para4 = req.body.para4;

    const awa = new awa({
      sample_id: sample_id,
      title: title,
      question_heading: question_heading,
      my_heading: my_heading,
      para1: para1,
      para2: para2,
      para3: para3,
      para4: para4,
    });
      awa
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
