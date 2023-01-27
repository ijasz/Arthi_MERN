const doc = window.document;

// console.log(doc);

const text = doc.createElement("h1");

text.style.color = "red";
text.style.fontSize = "50px";

text.innerText = "hello";

doc.body.appendChild(text);

// console.log(h1);
