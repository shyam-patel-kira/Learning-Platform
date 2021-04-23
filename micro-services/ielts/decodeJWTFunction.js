import dotenv from "dotenv";
import jwa from "jwa";
import jwt from "jsonwebtoken";
import Inversoft from "passport-node-client";
dotenv.config();
const JWT_SECRET = process.env.TOKEN_SECRET;
const JWT_SECRET_ADMIN = process.env.TOKEN_SECRET_ADMIN;

/**
 * Decode the JWT by extracting the JWT from the HTTP request header.
 *
 * @param {Object} req The HTTP request
 * @returns {Object} the decoded JWT or null if the JWT was not found in the request or it is invalid
 */
export default function _decodeJWT(req) {
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
