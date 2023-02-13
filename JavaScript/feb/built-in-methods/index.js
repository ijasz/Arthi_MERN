const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

const pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

//--- Map Prototype ---//

Array.prototype.myMap = function (func) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(func(this[i], i));
  }
  return arr;
};

// const a = officers.map((data, index) => {
//   return data.id;
// });

// const b = officers.myMap(function (data, index) {
//   return data.id;
// });

// console.log(b);
// console.log(b);

//--- Reduce Prototype ---//

// let totalYears = pilots.reduce(function (accumulator, pilot) {
//   console.log("accumulator", accumulator);
//   console.log("pilot", pilot);
//   console.log("total", accumulator + pilot.years);
//   return accumulator + pilot.years;
// }, 0);

Array.prototype.mySum = function (fun, value = 0) {
  let v = value;
  for (let i = 0; i < this.length; i++) {
    v = fun(v, this[i], i, this);
  }
  return v;
};

// var totalYears = pilots.reduce(function (accumulator, pilot, index, arr) {
//   return accumulator + pilot.years;
// }, 0);

// const totalYear = pilots.mySum(function (accumulator, pilot, index, arr) {
//   console.log(index, arr);
//   return accumulator + pilot.years;
// });

// console.log(totalYear);
// console.log(totalYears);

//--- Filter Prototype ---//

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

Array.prototype.myFilter = function (fun) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i], i)) arr.push(this[i]);
  }
  return arr;
};

const result = words.myFilter((data, index) => {
  if (data.length > 6) {
    return data;
  }
});

console.log(result);
