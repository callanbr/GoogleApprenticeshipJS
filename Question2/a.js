// (a) What will the following code fragment print?
// 3, 4

let x = 2;
let y = 3;
if (x < y) {
  x = x + 1;
} else {
  y = y + 1;
}
if (x < y) {
  x = x + 1;
} else {
  y = y + 1;
}
console.log(x);
console.log(y);
