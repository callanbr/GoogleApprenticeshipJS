//(b) Consider the following function:

function func(x, y) {
  let ans = x * y;
  return ans * ans - y;
}

// What would the following calls to the function return?

// func(0, 0) → 0
console.log(func(0, 0));

// func(-1, 1) → 0
console.log(func(-1, 1));

// func(1, -1) → 2
console.log(func(1, -1));

// func(-1, -1) → 2
console.log(func(-1, -1));
