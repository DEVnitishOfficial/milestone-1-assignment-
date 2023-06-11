

const button = document.getElementById("colorButton");
const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener("click", () => {
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += colorArr[ Math.floor(Math.random() * colorArr.length)]; 
        // console.log(hexColor);
    }
    document.body.style.backgroundColor = hexColor;
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const button = document.getElementById("colorButton");
// const colorArr =['#FF9834', '#56FFGG', '#AFD3FF', '#FFFFF0', '#45AACF', '#F1230F', '#8BBE80', '#0CCEE5', '#BB3580', '#8EFCD2'];

// button.addEventListener("click", () => {
//         const colorArrIndex = colorArr[Math.floor(Math.random() * colorArr.length)]; 
//     document.body.style.backgroundColor = colorArrIndex;
// });

// console.log(Math.random())


