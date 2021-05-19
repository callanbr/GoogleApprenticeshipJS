// Extend the above naive implementation of the intersection function above to handle the intersection of three arrays. Attempt to make this function as efficient as possible.

// Define the arrays:
let A = [1, 2, 3, 4, 5, 6];
let B = [10, 9, 8, 7, 6, 5];
let C = [1, 3, 5, 7, 9, 11];

// function intersection(A, B, C) {
//   let arrays = [A, B, C];
//   let intersection = arrays.shift().filter((x) => {
//     return arrays.every((y) => {
//       return y.indexOf(x) !== -1;
//     });
//   });
//   return intersection;
// }

// console.log(intersection(A, B, C));

// Another Way:

function intersection(A, B, C) {
  let arrays = [A, B, C];
  let intersection = arrays.reduce((prev, cur) =>
    prev.filter((res) => cur.includes(res))
  );
  return intersection;
}

console.log(intersection(A, B, C));
