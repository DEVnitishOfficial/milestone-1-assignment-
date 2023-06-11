
const audio = new Audio('alert.mp3');
const button = document.getElementById("unitConverter");
button.addEventListener("click", () => {
    const celsius = document.getElementById("inputField").value;
    if (isNaN(celsius)){
      audio.play();
      alert("Please enter a number");
      return;
    }
   const fahrenheit = (celsius * 9/5) + 32;

   const createinputField = document.createElement("input");
   createinputField.setAttribute("id", "result");
   createinputField.readOnly = true;

   createinputField.placeholder = `result in \u{2109} `;
   const addIn = document.getElementById("output");
   // Remove previous result if exists
   const previousResult = document.getElementById("result");
   if (previousResult) {
     previousResult.remove();
   }

   addIn.appendChild(createinputField);
   createinputField.value = fahrenheit +  "\u{2109}"

})