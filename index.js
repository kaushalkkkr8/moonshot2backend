const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const { data } = require("./db.connect");
const Data = require("./Model/dataSchema");
data();

const bodyParser = require("body-parser");
const authRouter = require("./Routes/authRouter");
const graphRouter = require("./Routes/graphRouter");

app.use(express.json());
app.use(bodyParser.json());

const PORT = 3001;

app.use("/auth", authRouter);
app.use("/data", graphRouter);

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
app.post("/data", async (req, res) => {
  try {
    const addData = await Data(req.body);
    addData.save();
    res.status(201).json({ message: "Add successfully", data: addData });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
// app.get("/data", async (req, res) => {
//   try {
//     const allData = await Data.find();
//     if (allData.length > 0) {
//       res.status(200).json(allData);
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
