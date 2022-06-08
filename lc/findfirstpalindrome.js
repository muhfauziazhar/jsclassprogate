const firstPalindrome = (words) => {
  for (const word of words) {
    if (word == word.split("").reverse().join("")) return word;
  }
  return "";
};

let words = ["abc", "car", "ada", "racecar", "cool"];

console.log(firstPalindrome(words));
