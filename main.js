// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

let someNumber = 4;

let someConvertedStringNumber = someNumber.toString();

//console.log("Hi");

if (someConvertedStringNumber !== someNumber) {
  console.log("You converted the string!");
}

// Write a JavaScript program to convert a string to the number.

let someString = "6";

let someConvertedNumberString = parseInt(someString);

if(someConvertedNumberString === 6){
  console.log("You converted the string!");
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
let testValue;

const typeTeller = (someValue) => {
  return typeof(someValue);
}

typeTeller(testValue);

  
// Write a JavaScript program that adds 2 numbers together.

let numOne = 4;
let numTwo = 5;

const numberAdd = (inputOne, inputTwo) => {
  return inputOne + inputTwo;
}

numberAdd(numOne, numTwo);

// Write a JavaScript program that runs only when 2 things are true.

let factorOne = -1;
let factorTwo = 3;

const numberEvaluator = (inputOne, inputTwo) => {
  if (inputOne < 5 && inputTwo < 5){
    console.log("This program runs");
  }
}

numberEvaluator(factorOne, factorTwo);

// Write a JavaScript program that runs when 1 of 2 things are true.

// Write a program that runs 1 of the 2 are true.

let factorThree = 1;
let factorFour = 9;

const numberEvaluatorTwo = (inputOne, inputTwo) => {
  if (inputOne < 5 || inputTwo < 5){
    console.log("This program runs");
  }
}

numberEvaluatorTwo(factorThree, factorFour);

// Write a JavaScript program that runs when both things are not true.  

let factorFive = 0;
let factorSix = 10;

const numberEvaluatorThree = (inputOne, inputTwo) => {
  if(inputOne === 4 && inputTwo === 6){
    console.log("Hey those inputs are true, what the heck?");
  } else{
    console.log("Hey, both conditionals are not true!");
  }
}

numberEvaluatorThree(factorFive, factorSix);

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
