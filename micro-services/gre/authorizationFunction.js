const dotenv = require("dotenv");
const mongoose = require("mongoose");
const jwa = require("jwa");
const jwt = require("jsonwebtoken");
const Inversoft = require("passport-node-client");
dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

module.exports = function _authorized (decodedJWT, role) {
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
