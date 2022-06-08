const checkPrime = (nums) => {
  let isPrime = true;
  if (nums == 1 || !nums) {
    return "bukan bilangan prima ataupun bilangan komposit";
  } else if (nums > 1) {
    for (let i = 2; i < nums; i++) {
      if (nums % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    return `${nums} merupakan bilangan prima`;
  } else {
    return `${nums} bukan merupakan bilangan prima`;
  }
};

console.log(checkPrime(12379));
