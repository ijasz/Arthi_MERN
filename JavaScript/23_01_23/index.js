if (false) {
  console.log("if");
  if (false) {
    console.log("nested if");
  } else if (true) {
    console.log("nested else if");
  } else {
    console.log("nested else");
  }
} else if (true) {
  console.log("else if");
  if (false) {
    console.log("nested if");
  } else if (true) {
    console.log("nested else if");
  } else {
    console.log("nested else");
  }
} else {
  console.log("else");
  if (false) {
    console.log("nested if");
  } else if (true) {
    console.log("nested else if");
  } else {
    console.log("nested else");
  }
}
