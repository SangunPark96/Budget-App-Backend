var uuidv1 = require('uuidv1')


module.exports = [
    {
      id: uuidv1(),
      product: "World's Largest Ball",
      item_name: "Dog Toy",
      amount: "50",
      from: "Pet Store",
      date: "2024-06-32",
      category: "Personal",
      type: "Withdrawal"
    },
    {
      id: uuidv1(),
      product: "Paycheck",
      item_name: "Salary",
      amount: "150",
      from: "Work",
      date: "2022-05-20",
      category: "Business",
      type: "Deposit"
    },
    {
      id: uuidv1(),
      product: "Infinity Stuffed Oreos",
      item_name: "Food",
      amount: "50",
      from: "Grocery Store",
      date: "2022-04-23",
      category: "Dumb",
      type: "Withdrawal"
    },
];