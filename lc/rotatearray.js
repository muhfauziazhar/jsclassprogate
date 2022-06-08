let rotateFail = function (nums, k) {
  let final = nums.splice(nums.length - k);
  console.log(final);
  for (let i = 0; i < final.length; i++) {
    nums.splice(i, 0, final[i]);
  }
  // saat k = 2
  // saat i = 0 --> nums.splice(0, 0, final[0]) --> inserts finla[0] at index 0
  // saat i = 1 --> nums.splice(1, 0, final[1]) --> inserts final[1] at index 1
  return nums;
};

// kesalahan code d atas ialah, saat k lebih besar dari nums.length, tentunya akan salah

let nums = [1, 1, 2, 5, 6, 7, 8, 9, 9];
console.log(rotateFail(nums, 2));

let rotateFail2 = (nums, k) => {
  while (k--) {
    nums.unshift(nums.pop());
  }
  return nums;
};
let nums2 = [1, 2, 3, 4, 5];
// console.log(rotateFail2(nums2, 5));

let rotate = function (nums, k) {
  let length = nums.length;
  let result = [...nums];

  for (let i = 0; i < length; i++) {
    let index = (i + k) % length;
    nums[index] = result[i];
  }

  return nums;
};

console.log(rotate(nums2, 2));

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
// console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
// console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
