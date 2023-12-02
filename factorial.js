function factorialize(num) {
  let n = 1;
  for (let i = 2; i <= num; i++) {
    n *= i;
  }
  return n;
}

factorialize(5);
