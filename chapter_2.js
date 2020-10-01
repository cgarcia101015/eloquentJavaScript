// //Bindings
// let caught = 5 + 5;
// let ten = 10;
// console.log(ten * ten);
// let mood = "light";
// console.log(mood);
// mood = "dark";
// console.log(mood);
//
// let luigisDebt = 140;
// luigisDebt = luigisDebt - 35;
// console.log(luigisDebt);
//
// let one = 1, two = 2;
// console.log(one + two);
//
// var name = "Ayda";
// const greeting = "Hello ";
// console.log(greeting + name);
// //Functions
// //Return Values
// console.log(Math.max(2, 4));
// console.log(Math.min(2, 4) + 100);
//Control Flow
// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " + theNumber * theNumber);
//Conditional Execution
// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)){
//   console.log("Your number is the square root of " + theNumber * theNumber);
// }

// if (1 + 1 == 2) console.log("It's true");
//
// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//   console.log("Hey. Why didn't you give me a number?");
// }

// let num = Number(prompt("Pick a number"));
//
// if (num < 10) {
//   console.log("Small");
// } else if (num < 100) {
//   console.log("Medium");
// } else {
//   console.log("Large");
// }

//While and do Loops
// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number = number + 2;
// }
//While
// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);
//
// //Do
// let yourName;
// do{
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

//for Loops
// for (let number = 0; number <= 12; number = number + 2) {
//   console.log(number);
// }

// let result = 1;
// for (let counter = 0; counter < 10; counter = counter + 1) {
//   result = result * 2;
// }
// console.log(result);
// //Breaking out of a Loop
// for (let current = 20; ; current = current + 1) {
//   if (current % 7 == 0) {
//     console.log(current);
//     break;
//   }
// }
//Dispatching on a Value with switch
// switch(prompt("What is the weather like?")) {
//   case "rainy":
//     console.log("Remember to bring an umbrella.");
//     break;
//   case "sunny":
//     console.log("Dress lightly.");
//     break;
//   case "cloudy":
//     console.log("Go outside.");
//     break;
//   default:
//     console.log("Unknown weather type!");
//     break;
// }
//Exercise Looping a Triangle
// let item = "#";
// for (i=0; i<7; i++){
//   console.log(item)
//   item = item + "#";
// }
//FizzBuzz
// for (i=1; i<=100; i++) {
//   if((i % 3 == 0) && (i % 5 == 0)) {
//     console.log("FizzBuzz")
//   } else if(i % 5 == 0){
//     console.log("Buzz");
//   } else if(i % 3 == 0){
//     console.log("Fizz");
//   } else {
//     console.log(i)
//   }
// }
//Chessboard
let size = 0;
while (size < 8) {
  if (size % 2 == 0){
    console.log(" # # # #");
    size++;
  } else {
    console.log("# # # #");
    size++;
  }

}
