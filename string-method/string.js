////////////////////////
/* 1
let text = "hello ";
let char = "world";
let con = text.concat(char);
console.log(con);
*/
/////////////////////
/* 2
let text = "javascript";
decument.writeln(text.length);
*/
///////////////////////
/* 3
let text = "programming";
document.writeln(text.charAt(0));
*/
//////////////////////
/* 4
let text = "coding is fun";
let sli = text.slice(0,6);
document.writeln(sli);
*/
/////////////////////
/* 5
let text = "cat";
document.writeln(text.replace("a", "e"));
*/
//////////////////////
/* 6
let text = "javascript";
document.writeln(text.toUpperCase(text));
*/
///////////////////////
/* 7
let text = "apple,banana,orange";
let frut = text.split(",");
document.writeln(frut);
*/
//////////////////////////
/* 8
let arr = ["hello", "world"];
let hello = arr.join(" ");
document.writeln(hello);
*/
//////////////////////////
/* 9
let text = "  hello world ";
document.writeln(text.trim());
*/
////////////////////////////
/* 10
let text = "hello world";
document.writeln(text.includes("world"));
*/
///////////////////////////////
/* 11
let text = "hello";
let rev = "";

for (let i = text.length - 1; i >= 0; i--) {
  rev += text[i];
}
document.writeln(rev); 
*/
////////////////////////////////
/* 12
let text = "elephant";
let count = 0;
for (let i = 0; i < text.length; i++)
{
    if (text[i] === "e")
    count++;
}
document.writeln(count);
*/
//////////////////////////////
/* 13
let text = "racecar";

let fir = text.substring(0, Math.floor(text.length / 2));
let rev = "";

for (let i = text.length - 1; i >= Math.ceil(text.length / 2); i--) {
  rev += text[i];
}

if (fir === rev) document.writeln("true");
else document.writeln("false");
*/
/////////////////////////////
/* 14
let text = "hello world";

let words = text.split(" ");
let result = "";

for (let i = 0; i < words.length; i++)
{
    let w = words[i];

    result += w[0].toUpperCase() + w.slice(1) + " ";
}

console.log(result.trim());

*/
//////////////////////////////
/*  15
let num = 1234.5678;
document.writeln(num.toFixed(2));
*/
///////////////////////////
/* 16
let text = "There are 3 apples and 2 oranges";

let numbers = text.match(/\d+/g);

console.log(numbers);
*/
/////////////////////////
/* 17
let email = "example@email.com";

let valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

console.log(valid);
*/
/////////////////////////
/* 18
let str = " this is bad word";
document.writeln(str.replace("bad", "good"));
*/
/////////////////////////
/* 19
let str = prompt("Enter a string");
let output = str[0];
for (let i = 1; i < str.length - 1; i++)
{
    if (str[i] !== str[i - 1])
        output += str[i];
    else
        output = output;
        
}
document.writeln(output);
*/
////////////////////////////

/* 20
let str = "string";
let sort = str.split("").sort();
document.writeln(sort.join(""));
*/

//////////////////////////////
/* 21
let word = prompt("Enter a string");
let str = prompt("Enter a string");
result = "";
for (let i = 0; i < word.length; i++)
{
    if (str.includes(word[i]))
        result = "true";
    else
        result = "false";
}
document.writeln(result);
*/
/////////////////////////////
/* 22
let word = prompt("Enter a string");
let str = word.split(" ");
result = " ";
for (let i = str.length - 1; i >= 0; i--)
{
    result += str[i] + " ";
}
document.writeln(result);
*/
//////////////////////////////
/* 23
let big = " ";
let str = "Web developmenttttt is fascinating".split(" ");
for (let i = 1; i < str.length - 1; i++)
{
    if (str[i].length > str[i - 1].length)
        big += str[i];
        
}
document.writeln(big);
*/
///////////////////////////////
/* 24
let text = prompt("Enter a sentence");
text = text.toLowerCase();
text = text.replace(/[^a-z0-9]/g, "");

let rev = text.split("").reverse().join("");
    if (text === rev) document.writeln("true");
    else document.writeln("false"); 
*/
/////////////////////////////////
/* 25
let text = "mississippi";

let freq = {};

for (let i = 0; i < text.length; i++) {
  let ch = text[i];

  if (freq[ch]) freq[ch]++;
  else freq[ch] = 1;
}

console.log(freq);
*/
///////////////////////////////////
/* 26
let text = prompt("Enter a string:");
let result = "";

for (let i = 0; i < text.length; i++) {
  if (text[i] === "a") result += "1";
  else if (text[i] === "e") result += "2";
  else if (text[i] === "i") result += "3";
  else if (text[i] === "o") result += "4";
  else if (text[i] === "u") result += "5";
  else result += text[i];
}

document.writeln(result);
*/
/////////////////////////////////
/* 27
let str = "JavaScript is fun";
if (str.startsWith("Java"))
    document.writeln("true");
else ("false ");
*/
///////////////////////////////
/* 28
let str = "image.png";
if (str.endsWith("png"))
    document.writeln("true");
else document.writeln("false");
*/
//////////////////////////////
/* 29
let str = "image.png ";
document.writeln(str.repeat(3));
*/
/////////////////////////////

let str = "hello world ";
document.writeln(str.indexOf('o'));







