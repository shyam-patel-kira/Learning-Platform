import dotenv from "dotenv";
import jwa from "jwa";
import jwt from "jsonwebtoken";
import Inversoft from "passport-node-client";
dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

export default function _authorizedAdmin(decodedJWT, role) {
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
      JWT_SECRET_ADMIN,
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
