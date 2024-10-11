// authMiddleware.js
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; // If it's JWT from your server

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "your_jwt_secret_key");
      req.userId = decodedData?.id;
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
