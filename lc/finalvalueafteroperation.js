const finalValueAfterOperations = (operations) => {
  let x = 0;
  for (const operation of operations) {
    if (
      operation.toLowerCase() == "++x" ||
      operation.toLowerCase() == "x++"
    )
      x++;
    else x--;
  }
  return x;
};

let operations = ["X++", "X++"];
console.log(finalValueAfterOperations(operations));

//one line solutions
const finalValueAfterOperationsV2 = (operations) =>
  operations.reduce(
    (acc, curr) => (curr[1] === "+" ? ++acc : --acc),
    0
  );
