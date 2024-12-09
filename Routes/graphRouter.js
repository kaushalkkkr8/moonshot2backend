const authenticateGraph = require("../Middleware/authgraphs");
const authGraph= require("../Controllers/authGraph")

const router = require("express").Router();

router.get("/", authenticateGraph, authGraph);
module.exports = router;
