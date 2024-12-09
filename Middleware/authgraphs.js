const jwt = require("jsonwebtoken");
const authenticateGraph = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(401).json({ message: "Unauthorized ,jwt token required" });
  }
  try {
    const decode = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decode;
    console.log(" req.user", req.user);
    
    next();
  } catch (error) {
    return res.status(401).json({ message: "Wrong or expired token" });
  }
};
module.exports = authenticateGraph;
