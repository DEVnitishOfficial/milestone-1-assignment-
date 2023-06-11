
const audio = new Audio("./alert.mp3")
const discountbtn = document.querySelector(`#disc-btn`);
discountbtn.addEventListener(`click`, () =>{
    let originalPrice = document.querySelector(`#actualPrice`).value;
    let discountedPrice = document.querySelector(`#discountedPrice`).value;

    if(originalPrice === "" || discountedPrice === ""){
        audio.play();
        alert("please fill up all the input field") 
    }
     else {
        const discount = originalPrice - discountedPrice;
        const percentageDiscount = 100*(Number(discount/originalPrice));
        document.querySelector(".output").innerHTML = `congratulation 🎉 nitish you got <span class="discount-percentage">${percentageDiscount.toFixed(2)}% </span> discount on this product`;
        document.querySelector(".cong-img").style.display = "flex";
    }
});


