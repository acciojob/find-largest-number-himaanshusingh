function findLargest(a, b, c) {
  if (a > b) {
    if (a > c) return a;
    return c;
  } else {
    if (b > c) return b;
    return c;
  }
}

// const num1 = parseInt(prompt("Enter First Number."));
// const num2 = parseInt(prompt("Enter Second Number."));
// const num3 = parseInt(prompt("Enter Third Number."));

// alert(findLargest(num1, num2, num3));