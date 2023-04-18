const express = require("express");
const cors = require("cors")
const budgetController = require("./controllers/budgetController.js")
const app = express();

app.use(cors());
app.use(express.json());

  
app.get("/", (req, res) => {
    res.send("welcome to the server")
})

app.use("/transactions", budgetController);

app.get("*", (req, res) => {
  console.log("404!");
  res.status(404).json({ error: "Page Not Found" });
});

module.exports = app
