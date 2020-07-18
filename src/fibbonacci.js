function fibbo(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n > 1) {
    return fibbo(n - 1) + fibbo(n - 2);
  }
}

console.log(fibbo(10));
