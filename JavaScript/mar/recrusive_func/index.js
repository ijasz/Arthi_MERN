let c = 0;

function count() {
  if (c < 50) {
    console.log(++c);
    count();
  }
}

count();
