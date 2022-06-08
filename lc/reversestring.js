let str = "Aku suka kamu";

const reverseString = (str) => {
  let arrOfStr = str.split("").reverse().join("");
  console.log(arrOfStr);
};

reverseString(str);

const reverseString2 = (str) => {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  console.log(revString);
};

reverseString2(str);
