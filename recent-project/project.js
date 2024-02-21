//Learn javascript with one project
//1. Deposite some money
//2. Determine number of lines to bet on
//2. Collect a bet amount
//4. Spin the slot machine
//5. check if the user won
//6. Give the user their winnings
//7. Play again

//Function statement
// function deposit() {
//   return 1;
// }
// deposit();
var prompt = require("prompt-sync")();
const deposit = () => {
  while (true) {
    const depositAmount = prompt("enter a deposite amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount");
    } else {
      return numberDepositAmount;
    }
  }
};
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("enter a number of lines : ");
    const numberOflines = parseFloat(lines);
    if (isNaN(numberOflines) || numberOflines <= 0 || numberOflines > 3) {
      console.log("Invalid number of lines, try again");
    } else {
      return numberOflines;
    }
  }
};
let balance = deposit();
const numberOflines = getNumberOfLines();
