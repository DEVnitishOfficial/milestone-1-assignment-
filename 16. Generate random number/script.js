const rendomBtn = document.querySelector(`#renBtn`);
const output = document.querySelector(`.outPut`);
 
rendomBtn.addEventListener("click", () => {
    const renGenNum = Math.floor(Math.random() * 100) + 1;
    console.log(renGenNum - 1);
    output.innerHTML = renGenNum;
    output.style.display = "flex";

})
// console.log(Math.random());
// console.log((Math.random() * 100));
 