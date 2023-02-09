console.log("connected");
const doc = window.document;

function tracking(e) {
  const h1 = doc.querySelector("h1");
  const x = e.x;
  const y = e.y;
  const clientWidth = doc.body.clientWidth;
  const clientHeight = doc.body.clientHeight;

  // if (x < clientWidth - 50 && y < clientHeight - 50) {
  h1.style.top = y + "px";
  h1.style.left = x + "px";
  // }
  console.log(e);
}
