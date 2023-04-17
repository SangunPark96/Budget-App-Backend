const express = require("express");
const transactions = express.Router();
const budgetArray = require("../models/budget-models.js");

transactions.get("/", (req, res) => {
  res.json(budgetArray);
});

transactions.post("/", (req, res) => {
  budgetArray.push(req.body);
  res.status(201).json(budgetArray[budgetArray.length - 1]);
})

transactions.get("/:index", (req, res) => {
  const { index } = req.params;
  if (budgetArray[index]) {
    res.json(budgetArray[index])
  } else {
    res.redirect("/")
  }
})
transactions.put("/:index", (req, res) => {
  const { index } = req.params;
  if (budgetArray[index]) {
    budgetArray[index] = req.body;
    res.status(200).json(budgetArray[index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

transactions.delete("/:index", (req, res) => {
  const { index } = req.params;
  const deletedLog = budgetArray.splice(index,1);
  res.status(200).json(budgetArray)
})

module.exports = transactions;