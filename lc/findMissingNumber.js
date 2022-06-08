let a = [1, 4, 7],
  count = a[a.length - 1];
const findMissing = (num) => {
  let missing = [];
  for (let i = a[0]; i <= count; i++) {
    if (num.indexOf(i) == -1) {
      missing.push(i);
    }
  }
  console.log(missing);
};

findMissing(a);
