// const a = ["apple", "grapes", "kiwi", "orange"];
// const person = { name: "xxx", age: 20, loaction: "pondy" };

// for (const i of a) {
//   console.log(i);
// }

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// console.log("");

// for (const key in person) {
//   console.log(`${key} : ${person[key]}`);
// }

// while loop

// let i = 0;

// while (i < 10) {
//   i++;
//   console.log(i);
// }

// do while loop

// let i = 0;

// do {
//   i++;
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// } while (i < 10);

const doc = window.document;

// For finding elements in DOM(Document)

console.log(doc.getElementsByClassName("para"));
console.log(doc.getElementsByTagName("p"));
console.log(doc.getElementsByName("para-name"));
console.log(doc.getElementById("para-id"));
console.log(doc.querySelector("body > #para-id"));
console.log(doc.querySelectorAll("body > #para-id"));

const p = doc.querySelectorAll("body > #para-id");

for (const i of p) {
  i.innerHTML = "hello☻";
}
