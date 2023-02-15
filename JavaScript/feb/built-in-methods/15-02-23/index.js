const a = [1, 2, 3, 4, 2];

const arr = a.reduce(function (store, data) {
  return store + data;
}, 1);

console.log(arr);

// let n = 0;

// a.map(function (d, i) {
//   if (i === 1) {
//     n += i;
//   }
// });

// console.log(n);
