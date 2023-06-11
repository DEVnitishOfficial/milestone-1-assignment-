// javascript code
const inputColor = document.querySelector("#inputColorName");
const firstColorInput = document.querySelector("#Color1");
const secondColorInput = document.querySelector("#Color2");
const colorBox = document.querySelector("#resultantColorBox");
const colorName = document.querySelector("#resultantColorName");

inputColor.addEventListener("submit", function (event) {
    event.preventDefault();

  const firstColor = firstColorInput.value.toLowerCase();
  const secondcolor = secondColorInput.value.toLowerCase();

  let mixedColor;
  switch (firstColor) {
    case "red":
      switch (secondcolor) {
        case "blue":
          mixedColor = "purple";
          break;
        case "yellow":
          mixedColor = "orange";
          break;
        default:
          mixedColor = "Invalid color combination";
      }
      break;
    case "blue":
      switch (secondcolor) {
        case "red":
          mixedColor = "purple";
          break;
        case "yellow":
          mixedColor = "green";
          break;
        default:
          mixedColor = "invalid color combination";
      }
      break;
    case "yellow":
      switch (secondcolor) {
        case "red":
          mixedColor = "orange";
          break;
        case "blue":
          mixedColor = "green";
          break;
        default:
          mixedColor = "invalid color combination";
      }
      break;
    default:
      mixedColor = "invalid color combination";
  }

  if (mixedColor == "invalid color combination") {
    resultantColorBox.style.backgroundColor = "white";
  } else {
    colorBox.style.backgroundColor = mixedColor;
  }
  colorName.textContent = mixedColor;
});
