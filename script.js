const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let output = "0";
const specialChars = ["%", "*", "/", "-", "+", "="];


const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "0";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "0" && specialChars.includes(btnValue)) return;
     if (output === "0") output = "";
    output += btnValue;
  }
  display.textcontent= output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
