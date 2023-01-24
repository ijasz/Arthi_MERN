const date = new Date();
// const mon = [
//   "jan",
//   "feb",
//   "mar",
//   "apr",
//   "may",
//   "june",
//   "july",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
//   "dec",
// ];

// const day = ["sun", "mon", "tue", "wed", "thr", "fri", "sat"];

// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(mon[date.getMonth()]);

// console.log(date.getHours(), "hrs");
// console.log(date.getMinutes(), "min");
// console.log(date.getSeconds(), "sec");

// console.log(day[date.getDay()], "day");

// switch (date.getDay()) {
//   case 0:
//     console.log("Sun");
//     break;
//   case 1:
//     console.log("Mon");
//     break;
//   case 2:
//     console.log("Tue");
//     break;
//   case 3:
//     console.log("Wed");
//     break;
//   case 4:
//     console.log("Thr");
//     break;
//   case 5:
//     console.log("Fri");
//     break;

//   default:
//     console.log("Sat");
//     break;
// }

// Ternary operator

// const age = 18;
// let isCheck;

// const voteAge = age >= 18 ? (isCheck = true) : (isCheck = false);

// console.log(isCheck);
// const even = [];
// const odd = [];

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     even.push(i);
//     console.log(i, "even");
//   } else {
//     odd.push(i);
//     console.log(i, "odd");
//   }
// }

// console.log(even);
// console.log(odd);

const add = [111, 2, 3, 4, 55, 66];

// console.log(add[0] + add[1] + add[2] + add[3] + add[4]);

for (let i of add) {
  console.log(i);
}

const person = {
  name: "arthi",
  age: 10,
  loacation: "pondy",
};

for (let i in person) {
  console.log("key - ", i, "|", "values - ", person[i]);
}

// for (let i = 10; i >= 1; --i) {
//   console.log(i);
// }
