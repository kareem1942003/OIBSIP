const numberValue = document.getElementById("number");
const menu = document.getElementById("menu");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convert");
const clearBtn = document.getElementById("clear");

function convertTocelsiusF() {
  const converValue = (numberValue.value - 32) * (5 / 9);
  result.value = converValue;
}
function convertTofahrenheitF() {
  const converValue = numberValue.value * (9 / 5) + 32;
  result.value = converValue;
}

function clear() {
  result.value = "";
  numberValue.value = "";
}

convertBtn.addEventListener("click", function () {
  if (menu.value === "Fahrenheit") {
    convertTocelsiusF();
  } else if (menu.value === "Celsius") {
    convertTofahrenheitF();
  }
});

clearBtn.addEventListener("click", clear);
