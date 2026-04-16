// ====================== Q1 =========================
// var userName = window.prompt("Enter Your Name ...");
// var userAge = window.prompt("Enter Your Age ...");
// if (userAge > 0) {
//   var bornYear = 2025 - userAge;
//   console.log(
//     "Hello " +
//       userName +
//       "! You are " +
//       userAge +
//       " years old and you were born around " +
//       bornYear
//   );
// }
// else {
//     console.log("Error, You can't enter negative age!!")
// }
// ====================== Q2 =========================
// var EGP = Number(window.prompt("Enter The EGP Amount ..."));
// if (EGP > 0) {
//   var Egp_To_USD = (EGP / 47.22).toFixed(2);
//   var EGP_To_EUR = (EGP / 54.35).toFixed(2);
//   var EGP_To_GBP = (EGP / 61.95).toFixed(2);
//   console.log(
//     EGP +
//       " EGP " +
//       "= $" +
//       Egp_To_USD +
//       " USD, €" +
//       EGP_To_EUR +
//       " EUR, £" +
//       EGP_To_GBP +
//       " GBP"
//   );
// } else {
//   console.log("Error, You can't enter negative amount!!");
// }
// ====================== Q3 =========================
// var num = Number(window.prompt("Enter a number ..."));
// if (num % 2 === 0) {
//   console.log(num + " is an even number");
// } else {
//   console.log(num + " is an odd number");
// }
// ====================== Q4 =========================
// var hour = Number(window.prompt("Enter Time ..."));
// if (hour >= 0 && hour <= 11) {
//   console.log("Good morning!");
// } else if (hour >= 12 && hour <= 17) {
//   console.log("Good afternoon!");
// } else if (hour >= 18 && hour <= 23) {
//   console.log("Good evening!");
// } else {
//   console.log("Error, You can't enter negative time!!");
// }
// ====================== Q5 =========================
// var score1 = Number(window.prompt("Enter Score 1 ..."));
// var score2 = Number(window.prompt("Enter Score 2 ..."));
// var score3 = Number(window.prompt("Enter Score 3 ..."));
//   var avg = ((score1 + score2 + score3) / 3).toFixed(2);
//   if (avg >= 50) {
//     console.log("Average: " + avg + ", " + "Status: Pass");
//   } else {
//     console.log("Average: " + avg + ", " + "Status: Fail");
//   }
// ====================== Q6 =========================
// var num1 = Number(window.prompt("Enter Num 1 ..."));
// var num2 = Number(window.prompt("Enter Num 2 ..."));
// var operator = window.prompt("Enter operator ...");
// var total;
// switch (operator) {
//   case "+":
//     total = num1 + num2;
//     console.log(num1 + " + " + num2 + " = " + total);
//     break;
//   case "-":
//     total = num1 - num2;
//     console.log(num1 + " - " + num2 + " = " + total);
//     break;
//   case "*":
//     total = num1 * num2;
//     console.log(num1 + " * " + num2 + " = " + total);
//     break;
//   case "/":
//     total = num1 / num2;
//     console.log(num1 + " / " + num2 + " = " + total);
//     break;
// }
// ====================== Q7 =========================
// var num = Number(prompt("Enter Num ..."));
// for (i = 1; i <= 10; i++) {
//   var total = num * i;
//   console.log(num + " x " + i + " = " + total + "\n");
// }
// ====================== Q8 =========================
// for (i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// ====================== Q9 =========================
// var number = 5;
// var factorial = 1;
// for (var i = 1; i <= number; i++) {
//    factorial = factorial * i;
// }
// console.log(factorial);
// ====================== Q10 =========================
// var n = 1;
// while (n * n <= 50) {
//   n++;
// }
// console.log(n);
// ====================== Q11 =========================
// var num1 = Number(window.prompt("Enter Num 1 ..."));
// var num2 = Number(window.prompt("Enter Num 2 ..."));
// num1 += num2;
// num2 = num1 - num2;
// num1 -= num2;
// console.log("After Swapping: " + "num1=" + num1 + "," + " num2=" + num2);
// ====================== Q12 =========================
// var Age = Number(window.prompt("Enter Your Age ..."));
// var ticketStatus = window.prompt("Do you have a ticket").toLowerCase();
// if (ticketStatus === "yes" || Age >= 18) {
// console.log("Access granted: true");
// }
// else{
//     console.log("Access granted: false");
// }
// ====================== Q13 =========================
// var num1 = Number(window.prompt("Enter Num 1 ..."));
// var num2 = Number(window.prompt("Enter Num 2 ..."));
// var num3 = Number(window.prompt("Enter Num 3 ..."));
// var maxNumber = num1;
// if (num2 > maxNumber) {
//   if (num2 > num3) {
//     maxNumber = num2;
//   }
// }
// if (num3 > maxNumber) {
//   if (num3 > num2) {
//     maxNumber = num3;
//   }
// }
// console.log("Largest number is: " + maxNumber);
// ====================== Q14 =========================
// var hour = Number(window.prompt("Enter hours worked ..."));
// var hourRate = Number(window.prompt("Enter hour rate ..."));
// var regularHours = 40;
// var overtime = 0;
// var salary;
// if (hour >= 0 && hourRate > 0) {
//   if (hour <= regularHours) {
//     salary = hour * hourRate;
//   } else {
//     salary = regularHours * hourRate;
//     overtime = (hour - regularHours) * (hourRate * 1.5);
//   }
//   var totalSalary = salary + overtime;
//   console.log(
//     "Regular: $" +
//       salary +
//       ", Overtime: $" +
//       overtime +
//       ", Total: $" +
//       totalSalary
//   );
// }
// else {
//   console.log("Error, You can't enter negative hour or hour Rate!!");
// }
// ====================== Q15 =========================
// var weight = Number(window.prompt("Enter your weight ..."));
// var height = Number(window.prompt("Enter your height ..."));
// if (weight > 0 && height > 0) {
//   var bmi = weight / height ** 2;
//   var category;
//   if (bmi < 18.5) {
//     category = "Underweight";
//   } else if (bmi < 25.0) {
//     category = "Normal weight";
//   } else if (bmi < 30.0) {
//     category = "Overweight";
//   } else {
//     category = "Obese";
//   }
//   console.log("BMI: " + bmi.toFixed(2) + " - " + category);
// }
// else {
//   console.log("Error, You can't enter negative weight or height!!");
// }
// ====================== Q16 =========================
// var amount = Number(window.prompt("Enter amount ..."));
// if (amount > 0) {
//   var tax = amount * 0.1;
//   var discount = 0;
//   if (amount > 100) {
//     discount = amount * 0.05;
//   }
//   var finalPrice = amount + tax - discount;
//   console.log(
//     "Subtotal: $" +
//       amount +
//       ", Tax: $" +
//       tax +
//       ", Discount: $" +
//       discount +
//       ", Final: $" +
//       finalPrice
//   );
// } else {
//   console.log("Error, You can't enter negative amount!!");
// }
// ====================== Q17 =========================
// var operation = Number(window.prompt("Enter operation number (1, 2, or 3) ..."));
// var amount = 0;
// var currentBalance = 0;
// switch (operation) {
//   case 1:
//     currentBalance = Number(window.prompt("Enter currentBalance ..."));
//     console.log("Your balance is: $" + currentBalance);
//     break;
//   case 2:
//     amount = Number(window.prompt("Enter amount ..."));
//     currentBalance = Number(window.prompt("Enter currentBalance ..."));
//     if (amount < currentBalance) {
//       currentBalance -= amount;
//       console.log("Withdrew $" + amount + ". New balance: $" + currentBalance);
//     } else {
//       console.log("Withdrew amount is greater than the balance");
//     }
//     break;
//   case 3:
//     amount = Number(window.prompt("Enter amount ..."));
//     currentBalance = Number(window.prompt("Enter currentBalance ..."));
//     currentBalance += amount;
//     console.log("Deposited $" + amount + ". New balance: $" + currentBalance);
//     break;
//   default:
//     console.log("Invalid operation number.");
// }
// ====================== Q18 =========================
// for (var i = 1; i <= 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(" FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log(" Fizz");
//   } else if (i % 5 === 0) {
//     console.log(" Buzz");
//   } else {
//     console.log(" " + i + " ");
//   }
// }
// ====================== Q19 =========================
// var rows = Number(window.prompt("Enter number of rows ..."));
// if (rows > 0) {
//   for (var i = 1; i <= rows; i++) {
//     for (var j = 1; j <= i; j++) {
//       console.log("*");
//     }
//     console.log(" ");
//   }
// } else {
//   console.log("Error, You can't enter negative rows!!");
// }
// ====================== Q20 =========================
// var rows = Number(window.prompt("Enter number of rows ..."));
// if (rows > 0) {
//   for (var i = 1; i <= rows; i++) {
//     var line = "";
//     for (var j = 1; j <= rows - i; j++) {
//       line += " ";
//     }
//     for (var k = 1; k <= i; k++) {
//       line += "*";
//     }
//     console.log(" " + line);
//   }
// } else {
//   console.log("Error, You can't enter negative rows!!");
// }


