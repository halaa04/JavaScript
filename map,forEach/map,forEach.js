//// 1
function doubleNumber(arr) {
  return arr.map((num) => num * 2);
}
document.writeln(doubleNumber([1, 2, 3]));
document.writeln("<br>");

//// 2 
function numbersToString(arr) {
    return arr.map( num => num.toString())
}
document.writeln(numbersToString([1, 2, 3]))
document.writeln("<br>");

//// 3
function upperCaseNames(arr) {
    return arr.map(name => name.toUpperCase());
}
document.writeln(upperCaseNames(["hala", "farah", "sara"]));
document.writeln("<br>");

//// 4
function addFive(arr) {
    return arr.map(num => num + 5);
}
document.writeln(addFive([0, 5, 10]));
document.writeln("<br>");

//// 5
function getNames(arr) {
    return arr.map ( obj => obj.name)
}
document.writeln(getNames([
    { name: "hala", age: 21 },
    { name: "mariam", age : 15 },
]));
document.writeln("<br>");

//// 6 
function wordLengths(arr) {
    return arr.map( word => word.length)
}
document.writeln(wordLengths(["banana", "apple", "cat"]))
document.writeln("<br>");

//// 7 
function valTimesIndex(arr) {
    return arr.map(num => num * arr.indexOf(num))
}
document.writeln(valTimesIndex([1, 2, 3]));
document.writeln("<br>");

//// 8 
function makeUsernames(arr){
    return arr.map (name => "@" + name.username)
}
document.writeln(
  makeUsernames([
    { username: "ahmad", age: 21 },
    { username: "sara", age: 15 },
  ]),
);
document.writeln("<br>");

//// 9
function squareNumbers(arr){
     return arr.map((num) => num * num);
}
document.writeln(squareNumbers([2, 3, 4]));
document.writeln("<br>");

//// 10 
function firstLetters(arr) {
    return arr.map((name) => name[0]);
}
document.writeln(firstLetters(["Ali", "Sara"]));
document.writeln("<br>");

//// 11
function sumNumbers(arr) {
  let sum = 0;
  arr.forEach(num => sum += num);
  return sum;
}
document.writeln(sumNumbers([10, 20, 30]));
document.writeln("<br>");

//// 12
function countEven(arr) {
  let count = 0;
  arr.forEach((num) => {
      if (num % 2 == 0) { count++; }
  });
  return count;
}
document.writeln(countEven([1, 2, 3,4]));
document.writeln("<br>");

//// 13 
function timesTen(arr) {
  return arr.map((num) => num  * 10);
}
document.writeln(timesTen([1, 2, 3]));
document.writeln("<br>");

//// 14
function addAdult(arr) {
  return arr.map((obj) => ({ ...obj, adult: obj.age > 18 }));
}
console.log(
  addAdult([
    { name: "Ali", age: 20 },
    { name: "Sara", age: 15 },
  ]),
);

//// 15 
function addTax(arr) {
  return arr.map((item) => item + 10);
}
document.writeln(addTax([100, 200]));
document.writeln("<br>");

//// 16
 function countBig(arr) {
   let count50 = 0;
   arr.forEach((num) => {
     if (num > 50) {
       count50++;
     }
   });
   return count50;
}
 
///// 17 
function labelNumbers(arr) {
  return arr.map((item) => `Number:${item}`);
}
console.log(labelNumbers([5, 10]));

//// 18
function productNames(obj) {
  return obj.map((item) => item.product);
}
document.writeln(
  productNames([
    { product: "Laptop", price: 1000 },
    { product: "Phone", price: 500 },
  ]),
);
document.writeln("<br>");

//// 19
function addIndex(arr) {
  return arr.map((item, index) => item + index);
}
document.writeln(addIndex([5, 5, 5]));
document.writeln("<br>");

//// 20
function isEvenArray(arr) {
  return arr.map((item) => item % 2 == 0);
}
document.writeln(isEvenArray([1, 2, 3, 4]));
document.writeln("<br>");





