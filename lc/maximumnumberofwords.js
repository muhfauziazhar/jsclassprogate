const maxNumberOfWords = (sentences) => {
  let max = 0;
  let temp = 0;
  for (const sentence of sentences) {
    temp = sentence.split(" ").length;
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

let sentences = [
  "alice and bob love leetcode and they are students",
  "i think so too",
  "this is great thanks very much i love you so much",
];
console.log(maxNumberOfWords(sentences));
