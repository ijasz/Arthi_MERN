const doc = window.document;

// // console.log(doc);

// const text = doc.createElement("h1");

// text.style.color = "red";
// text.style.fontSize = "50px";

// text.innerText = "hello";

// doc.body.appendChild(text);

// // console.log(h1);

for (let i = 128000; i <= 128000 + 400; i++) {
  const h1 = doc.createElement("h1");
  if (i % 2 == 0) {
    h1.style.color = "green";
  } else {
    h1.style.color = "red";
  }
  h1.innerHTML = `${i} &#${i};`;
  console.log(h1);
  doc.body.appendChild(h1);
}

// const name = "arthi";

// console.log(`My name is ${name}`);
