let price = 500000000000000;

price = price.toString();

const newTab = price.split("").reverse();

let result = [];

let start = 0;
let end = 3;

for (let i = 0; i < newTab.length / 3; i++) {
  arr = newTab.slice(start, end);

  for (n of arr) {
    result.push(n);
  }

  if (i === newTab.length / 3 - 1) {
    break;
  }
  result.push("-");
  start = start + 3;
  end = end + 3;
}

result = result.reverse().join("");

console.log("result", result);
