let events = [
  { event: "click", time: 1 },
  { event: "click", time: 2 },
  { event: "scroll", time: 3 },
  { event: "scroll", time: 4 },
  { event: "click", time: 5 },
  { event: "scroll", time: 6 },
];

let count = 1;

for (let i = 0; i < events.length - 1; i++) {
  if (events[i].event === events[i + 1].event) {
    count++;
  } else {
    document.writeln(
      "{ event: '" + events[i].event + "', count: " + count + " }<br>",
    );
    count = 1;
  }
}

document.writeln(
  "{ event: '" + events[events.length - 1].event + "', count: " + count + " }",
);
document.writeln("<br>");

//////////////// 2 ////////////////

let arr = [1, 4, 20, 3, 10, 5];
let target = 33;

let found = false;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;

  for (let j = i; j < arr.length; j++) {
    sum += arr[j];

    if (sum === target) {
      document.writeln("start =", i);
      document.writeln("end =", j);
      found = true;
      break;
    }

    if (sum > target) {
      break;
    }
  }

  if (found) break;
}

if (!found) {
  document.writeln(-1);
}
document.writeln("<br>");

///////////////// 3 ////////////////

let prices = [7, 1, 5, 3, 6, 4];

let minPrice = prices[0];
let maxProfit = 0;

for (let i = 1; i < prices.length; i++) {
  let profit = prices[i] - minPrice;

  if (profit > maxProfit) {
    maxProfit = profit;
  }

  if (prices[i] < minPrice) {
    minPrice = prices[i];
  }
}
document.writeln(maxProfit);
document.writeln("<br>");

///////////////// 4 ////////////////

let ar = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let totalWater = 0;

for (let i = 0; i < ar.length; i++) {
  let leftMax = 0;
  let rightMax = 0;

  for (let j = 0; j <= i; j++) {
    if (ar[j] > leftMax) {
      leftMax = ar[j];
    }
  }

  for (let j = i; j < ar.length; j++) {
    if (ar[j] > rightMax) {
      rightMax = ar[j];
    }
  }

  let water = Math.min(leftMax, rightMax) - ar[i];

  if (water > 0) {
    totalWater += water;
  }
}

document.writeln(totalWater);
document.writeln("<br>");

///////////////// 9 ////////////////

let arr2 = [2, -1, 1, 2, 2];
let visited = new Set();
let index = 0;

while (index >= 0 && index < arr2.length) {
  if (visited.has(index)) {
   document.writeln("Cycle exists!");
    break;
  }
  visited.add(index);
  index = index + arr2[index];
}

if (index < 0 || index >= arr2.length) {
  document.writeln("No cycle.");
}


