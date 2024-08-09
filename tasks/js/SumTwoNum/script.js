//  Sum two numbers

// 1. Create a function that takes two numbers as arguments and return their sum.

function sumTwoNumbers(num1, num2) {
    return num1 + num2;
}

function _Sum(num1, num2) {
    var num1 = parseInt(prompt("Enter the first number: "));
    var num2 = parseInt(prompt("Enter the second number: "));
    alert("The sum of the two numbers is: " + sumTwoNumbers(num1, num2));
}