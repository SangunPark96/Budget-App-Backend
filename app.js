const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());
const budgetController = require("./controllers/budgetController.js")

  

app.get("/", (req, res) => {
    res.send("welcome to the server")
})

app.use("/transactions", budgetController);

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" })
  });


module.exports = app
