const promise1 = new Promise((resolve, reject) => {
  if (false) {
    resolve("promises1 success");
  } else {
    reject("promises1 rejected");
  }
});

const promise2 = new Promise((resolve, reject) => {
  if (true) {
    resolve("promises1 success");
  } else {
    reject("promises1 rejected");
  }
});

const promise3 = new Promise((resolve, reject) => {
  if (true) {
    resolve("promises1 success");
  } else {
    reject("promises1 rejected");
  }
});

Promise.all([promise1, promise2, promise3])
  .then((success) => {
    console.log(success);
  })
  .catch((err) => console.log(err));
