// (b) Consider the following function:

function func(x, y) {
  let ans = 0;
  if (x > y) {
    ans = ans + x;
  } else if (x < y) {
    ans = ans + y;
  }
  if (ans < 0) {
    ans = ans + ans;
  } else {
    ans = ans - ans;
  }
  return ans;
}

//func(1,10) → 0
console.log(func(1, 10));

//func(5, 5) → 0
console.log(func(5, 5));

//func(-1, -10) → -2
console.log(func(-1, -10));
