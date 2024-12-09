const Data = require("../Model/dataSchema");

const authGraph = async (req, res) => {

  try {
    const allData = await Data.find();
    if (allData.length > 0) {
      res.status(200).json(allData);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = authGraph;
