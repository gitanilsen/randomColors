const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// Get Items
let container = document.querySelector(".container");
let colorCodeText = document.getElementById("color-code");
let codeInput = document.getElementById("code-input");
let toolTip = document.querySelector(".tool-tip");
let btn = document.querySelector(".btn");
let copyBtn = document.querySelector(".select-btn");

// Get Color code
btn.addEventListener("click", () => {
  let colorCode = "#";
  let colorCode2 = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += hexValues[Math.floor(Math.random() * hexValues.length)];
  }
  container.style.backgroundColor = colorCode;
  colorCodeText.innerHTML = `The color code is ${colorCode}`;
  codeInput.value = colorCode;
});

// Copy Code
copyBtn.addEventListener("click", () => {
  let codeInput = document.getElementById("code-input");
  /* Select the text field */
  codeInput.select();
  codeInput.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
  toolTip.style.display = "block";
  toolTip.innerText = `Copied ${codeInput.value}`;
});

// Remove Tool Tip on Mouse leave from copy btn
copyBtn.addEventListener("mouseleave", () => {
  toolTip.style.display = "none";
});
