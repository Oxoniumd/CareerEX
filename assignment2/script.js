//Exercise 1

let num = prompt("Enter a Number");

if (num % 2 == 0) {
  alert(` ${num} is Even `);
} else {
  alert(`${num} is odd`);
}

//Exercise 2

let num1 = prompt(`Enter a Number`);
let operator = prompt(`Enter an operator (+,-,/,*)`);
let num2 = prompt(`Enter a Number`);

if (operator === "+") {
  alert(`result: ${num1 + num2}`);
} else if (operator === "/") {
  if (num2 === 0) {
    alert(`Error:Division by zero is not allowed`);
  } else {
    alert(`result: ${num1 / num2}`);
  }
} else if (operator === "*") {
  alert(`result: ${num1 * num2}`);
} else {
  alert(`result: ${num1 - num2}`);
}

// Exercise 3
let numAge = prompt(`Enter your age`);

if (numAge <= 18) {
  alert(`Not Eligible`);
} else {
  alert(`Eligible`);
}

//Exercise 4
x = 0;

while (x <= 10) {
  a = x++;
  console.log(a);
}

// Exercise 5
const numTable = parseFloat(
  prompt(`Enter a number to generate its multiplication 
    table`)
);
console.log(`Multiplication table for ${numTable}`);
for (let i = 1; i <= 12; i++) {
  result = numTable * i;
  console.log(`${numTable} x ${i} = ${result}`);
}

//Exercise 6

const score = parseFloat(prompt(`Enter your score (0 -100)`));
if (isNaN(score) || score < 0 || score > 100) {
  alert("please enter a valid number between 0 and 100");
} else {
  if (score >= 70) {
    alert(`Excellent`);
  } else if (score >= 50) {
    alert(`Good`);
  } else {
    alert(`Needs Improvement`);
  }
}

//Exercise 7

numGuess = Math.floor(Math.random() * 5) + 1;

numUser = prompt(`Guess a number between 1 and 5`);

if (numUser === numGuess) {
  alert(`You guessed right`);
} else {
  alert(`Wrong guess. the number was ${numGuess}`);
}

//Excercise 8

for (let i = 0; i <= 15; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
