const factorial = (nums) => {
  if (nums == 0 || nums == 1) {
    return 1;
  } else if (nums < 0) {
    return "masukan bilangan positif";
  }
  let factorial = 1;
  for (let i = 1; i <= nums; i++) {
    factorial *= i;
  }
  return factorial;
};

console.log(factorial());
