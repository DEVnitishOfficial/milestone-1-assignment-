
let userInput = document.getElementById(`input-field`);
let buttonClick = document.getElementById(`button`);
let astriskSpace = document.getElementById(`blankContainer`);

let storeInput;

// Define an array of colors
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// applying input event on userInput
userInput.addEventListener("input" , (e) => {
    storeInput = Number(e.target.value);
});

//applying event on the button
buttonClick.addEventListener("click", () =>{
    astriskSpace.innerHTML = "";

    // code for astrisk pattern
    for(let row = storeInput; row >=1; row--){

        let color = colors[row % colors.length]; // Calculate the color for this row

        for(let col=1; col <= row; col++){

            astriskSpace.innerHTML += `<span style="color:${color};">*</span>`;

            // astriskSpace.innerHTML += "*";
     }
        astriskSpace.innerHTML += '<br>'
    };
});
