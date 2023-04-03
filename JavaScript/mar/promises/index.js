// const buyingNewPhone = false;

// const promise = new Promise((resolve, reject) => {
//     if (buyingNewPhone) {
//         resolve("i bought a new phone");
//     } else {
//         reject("i did not bought a new phone");
//     }
// })

// promise.then((success) => {
//     console.log(success);
// }).catch((err) => {
//     console.log(err);
// })

// function buyingPhonePromises(resolve, reject) {
//   if (buyingNewPhone) {
//     resolve("i bought a new phone");
//   } else {
//     reject("i did not bought a new phone");
//   }
// }

// buyingPhonePromises(
//   (success) => {
//     console.log(success);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

const fetchDate = true;

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (fetchDate) {
      resolve("data got");
    } else {
      reject("not found");
    }
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (fetchDate) {
      resolve("data got");
    } else {
      reject("not found");
    }
  }, 5000);
});

promise1.then(
  (success) => {
    console.log(success, "promises 1 called");
    promise2.then(
      (success) => console.log(success, "promises 2 also called"),
      (err) => console.log(err)
    );
  },
  (err) => console.log(err)
);

console.log("something else to do");
console.log("something else to do");
console.log("something else to do");
console.log("something else to do");
console.log("something else to do");
console.log("something else to do");
console.log("something else to do");
console.log("something else to do");
console.log("something else to do");
console.log("something else to do");
console.log("something else to do");
console.log("something else to do");
