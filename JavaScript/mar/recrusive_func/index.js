let c = 0;

function count() {
  if (c < 100000) {
    console.log(++c);
    count();
  }
}

count();
