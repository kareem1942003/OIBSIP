const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");
const inputBox1 = document.getElementById("inputBox1");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      inputBox.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      inputBox.value = string;
      inputBox1.value = string;
    } else if (e.target.innerHTML == "DE") {
      string = string.substring(0, string.length - 1);
      inputBox1.value = string;
    } else {
      string += e.target.innerHTML;
      inputBox1.value = string;
    }
  });
});
