//Defining a Function
// const square = function(x) {
//   return x * x;
// }
// console.log(square(12));
//
// const makeNoise = function(){
//   console.log("Pling!");
// };
//
// makeNoise();
//
// const power = function(base, exponent) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// }
//
// console.log(power(2, 10));

//Binding and Scopes
// let x = 10;
// if (true) {
//   let y = 20;
//   var z = 30;
//   console.log(x + y + z);
// }
// //y is not visible here
// console.log(x + z);

const halve = function(n){
  return n / 2;
};

let n = 10;
console.log(halve(100));

console.log(n);
