// const randomNumber = Date.now();
// console.log(randomNumber);
let number = Date.now();
console.log(number);
function horoscope(randomNumber) {
  if (randomNumber % 5 == 0) {
    return "Hebat!!";
  } else if (randomNumber % 2 == 0) {
    return "Boleh juga!";
  } else if (randomNumber % 3 == 0) {
    return "Mengerikan";
  } else {
    return "Coba lagi!";
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  this.innerHTML = "Coba lagi";
  this.style.color = "red";
  const hasil = document.getElementById("hasil");
  const newPara = document.createElement("p");
  newPara.innerHTML = horoscope(number);
  hasil.append(newPara);
});
