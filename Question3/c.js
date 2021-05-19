// (c) Consider the following function:

function func(x) {
  if (x <= 0) {
    return x;
  }
  return func(x - 5);
}

// What would the following calls to the function return?

// func(15) → 0
console.log(func(15));

// func(17) → -3
console.log(func(17));

// func(3) → -2
console.log(func(3));
