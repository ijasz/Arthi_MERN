const cars = ["Saab", "Volvo", "BMW"];
const person = ["arthi", "ashwathi", "santhosh"];

// cars.map(function (data, index, arr) {
//   console.log("data", data);
//   console.log("index", index);
//   console.log("arr", arr);
// });

// const a = 7;
// const b = 4;

// function total(a, b) {
//   const add = a + b;
//   const sub = a - b;
//   const arr = [add, sub];
//   return arr;
// }

// console.log(total(a, b));

function myMap(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}

myMap(cars, function (a, i, array) {
  console.log("called", a, i, array);
});

myMap(person, function (a, i, array) {
  console.log("called", a, i, array);
});
