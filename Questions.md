### Question 1.

- (a) What will the following code fragment print?

```js
let x = 2;
let y = 3;
console.log(x);
console.log(y);
console.log(x * y);
```

- (b) Consider the following function:

```js
function func(x, y) {
  let ans = x * y;
  return ans * ans - y;
}
```

- What would the following calls to the function return?

```
 func(0, 0) →
 func(-1, 1) →
 func(1, -1) →
 func(-1, -1) →
```

- (c) Consider the following class:

```js
class Multiplier {
  constructor() {
    this.count = 1;
  }
  increment() {
    this.count = this.count + 1;
  }
  apply(x) {
    return this.count * x;
  }
}
```

What would the following code fragment print?

```js
let multiplier = new Multiplier();
console.log(multiplier.apply(5));
multiplier.increment();
multiplier.increment();
console.log(multiplier.apply(5));
```

### Question 2.

- (a) What will the following code fragment print?

```js
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
```

- (b) Consider the following function:

```js
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
```

What would the following calls to the function return?

```
 func(1,10) →
 func(5, 5) →
 func(-1, -10) →
```

### Question 3.

- (a) What will the following code fragment print?

```js
let i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 1;
}
```

- (b) What will the following code fragment print?

```js
for (let i = 15; i > 0; i -= 5) {
  console.log(i);
}
```

- (c) Consider the following function:

```js
function func(x) {
  if (x <= 0) {
    return x;
  }
  return func(x - 5);
}
```

What would the following calls to the function return?

```
func(15) →
func(17) →
func(3) →
```

### Question 4.

The following code sample is a naive implementation of the intersection function, where the intersection of two arrays, A and B, is defined as an array that contains all the elements that are common to both A and B.

```js
function intersection(A, B) {
  let intersection = [];
  for (let a of A) {
    if (B.includes(a)) {
      intersection.push(a);
    }
  }
  return intersection;
}
```

Write code for each function listed below (union and difference), where:

- The union of two arrays, A and B, is defined as an array that contains all the elements that are in either A or B, and
- The difference of two arrays, A and B, is defined as an array that contains the elements that are in either A or B, but not both.

```js
function union(A, B) {}
```

```js
function difference(A, B) {}
```

### Optional Bonus Question

Extend the above naive implementation of the intersection function above to handle the intersection of three arrays. Attempt to make this function as efficient as possible.

```js
function intersection(A, B, C) {}
```
