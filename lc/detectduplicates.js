function setSolution(nums) {
  let testSet = new Set(nums);
  console.log(testSet);
  return testSet.size !== nums.length;
}

setSolution([1, 1, 1, 2, 3, 4, 5, 5, 6, 7]);
