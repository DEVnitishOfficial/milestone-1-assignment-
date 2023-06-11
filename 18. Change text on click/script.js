

const heading = document.getElementById("heading");
const changeTextButton = document.getElementById("toggle-text");

changeTextButton.addEventListener("click", () =>{
    if(heading.textContent === "The most affordable learning platform"){
        heading.textContent = "pw skills";
    }else{
        heading.textContent = "The most affordable learning platform";
    }
})
