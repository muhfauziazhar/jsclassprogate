function fizzBuzz(i) {
  if (i == 0) {
    console.log("Invalid input");
    return "Invalid input";
  } else if (i % 15 == 0) {
    console.log("FizzBuzz");
    return "FizzBuzz";
  } else if (i % 5 == 0) {
    console.log("Buzz");
    return "Buzz";
  } else if (i % 3 == 0) {
    console.log("Fizz");
    return "Fizz";
  } else {
    console.log(i);
    return i;
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  this.innerHTML = "Coba lagi";
  this.style.color = "red";

  var myNumber = document.getElementById("myNumber").value;
  const hasil = document.getElementById("hasil");
  const newPara = document.createElement("p");
  newPara.innerHTML = fizzBuzz(myNumber);
  hasil.append(newPara);
});

var input = document.getElementById("myNumber");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("button").click();
    input.value = "";
  }
});
