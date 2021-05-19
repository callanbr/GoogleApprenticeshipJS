// The following code sample is a naive implementation of the intersection function, where the intersection of two arrays, A and B, is defined as an array that contains all the elements that are common to both A and B.

// Define the arrays:
let A = [1, 2, 3, 4, 5, 6];
let B = [10, 9, 8, 7, 6, 5];

function intersection(A, B) {
  let intersection = [];
  for (let a of A) {
    if (B.includes(a)) {
      intersection.push(a);
    }
  }
  return intersection;
}

console.log(intersection(A, B));

// Write code for each function listed below (union and difference), where:
// The union of two arrays, A and B, is defined as an array that contains all the elements that are in either A or B, and
// The difference of two arrays, A and B, is defined as an array that contains the elements that are in either A or B, but not both.

// Array that contains all the elements that are in either A or B
function union(A, B) {
  let C = [...A, ...B]; // Could also use A.concat(B)
  let union = C.filter((i, p) => C.indexOf(i) === p); // Return C to show duplicates as well
  return union;
}
console.log(union(A, B));

// Array that contains the elements that are in either A or B, but not both.
function difference(A, B) {
  let uniqueInA = A.filter((res) => !B.includes(res));
  let uniqueInB = B.filter((res) => !A.includes(res));
  let difference = [...uniqueInA, ...uniqueInB];
  return difference;
}
console.log(difference(A, B));
