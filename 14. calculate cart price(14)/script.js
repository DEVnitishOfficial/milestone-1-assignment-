 // FOLLOWING ARE THE NECESSERY VARIABLE AND ARRAY.
 let toyRow = [];
 let totalQuantity = 0;
 let totalAmount = 0;
 let srNoCounter = 0;

  
 const selectToy = (id) => {  

  // ENABLING THE OUTPUT SCREEN
  document.querySelector(".bill-book").style.display = "flex";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // HERE WE ARE UPDATING THE QUANTITY, TOTAL QUANTITY, AND TOTAL AMOUNT IF THE ROW IS ALREADY CREATED IN THE OUTPUT SCREEN
 
 if(toyRow[id] != undefined){
    toyRow[id].quantity.textContent = Number(toyRow[id].quantity.textContent) + 1;

    toyRow[id].price.textContent = `${Toydata[id].toyPrice} * ${toyRow[id].quantity.textContent} = ${Number(Toydata[id].toyPrice) * Number(toyRow[id].quantity.textContent) }`;


    totalQuantity += 1;
    totalAmount += Number(Toydata[id].toyPrice);

    document.querySelector(".total-quantity").innerHTML = `Total Quantity : <span>${totalQuantity}</span>`;
    
    document.querySelector(".Total-amount").innerHTML = `Total Amount : <span>\u20B9${totalAmount}</span>`;

    return undefined ;
 }
//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//HERE, WHEN YOU CLICK ON ADD TO CART BUTTON ON FIRST TIME THEN, THE FOLLOWING CODE IS APPLIED AND CREATING A NEW ROW FOR THE ITEM THAT YOU WANT TO BUY.

// creating div element
 toyRow[id] = document.createElement("div");
 toyRow[id].classList.add("creating-content");

 document.querySelector(".price-content").appendChild(toyRow[id])

 // adding srNo.
 toyRow[id].srNo = document.createElement("h3");
 toyRow[id].srNo.textContent = (srNoCounter + 1) ;
 toyRow[id].appendChild(toyRow[id].srNo);

 // adding image
toyRow[id].toyImg = document.createElement(`img`);
toyRow[id].toyImg.src = Toydata[id].toyImg;
toyRow[id].appendChild(toyRow[id].toyImg);

//  adding Toy Name
toyRow[id].toyName = document.createElement("h3");
toyRow[id].toyName.textContent = Toydata[id].toyName;
toyRow[id].appendChild(toyRow[id].toyName);

// adding Quantity
toyRow[id].quantity = document.createElement("h3");
toyRow[id].quantity.textContent = 1;
toyRow[id].appendChild(toyRow[id].quantity);

// adding price
toyRow[id].price = document.createElement("h3");
toyRow[id].price.textContent = `${Toydata[id].toyPrice} * ${toyRow[id].quantity.textContent} = ${Number(Toydata[id].toyPrice) * Number(toyRow[id].quantity.textContent)}`

toyRow[id].appendChild(toyRow[id].price);


// seperating by horizontal line
toyRow[id].hr = document.createElement("hr");
document.querySelector(".price-content").appendChild(toyRow[id].hr);

// calculating totl quantity and total price

totalQuantity += 1;
    totalAmount += Number(Toydata[id].toyPrice);

    document.querySelector(".total-quantity").innerHTML = `Total Quantity : <span>${totalQuantity}</span>`;
    
    document.querySelector(".Total-amount").innerHTML = `Total Amount : <span> \u20B9${totalAmount}</span>`;
    srNoCounter++;

}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FOLLOWING ARE THE OBJECT FROM WHERE I TAKING TOYNAME, TOYPRICE AND TOYIMAGE.
const Toydata = [
  {
    toyName : "Scorpio",
    toyPrice : "100",
    toyImg : "./assets/img1.jpg"
  },
  {
    toyName : "Role's Royal",
    toyPrice : "200",
    toyImg : "./assets/img2.jpg"
  },
  {
    toyName : "Maruti",
    toyPrice : "300",
    toyImg : "./assets/img3.jpg"
  },
  {
    toyName : "Mig-27",
    toyPrice : "400",
    toyImg : "./assets/img4.jpg"
  },
  {
    toyName : "chinuk",
    toyPrice : "500",
    toyImg : "./assets/img5.jpg"
  },
  {
    toyName : "Tejas",
    toyPrice : "600",
    toyImg : "./assets/img6.jpg"
  },
  {
    toyName : "Ak-21",
    toyPrice : "700",
    toyImg : "./assets/img7.jpg"
  },
  {
    toyName : "Ak-47",
    toyPrice : "800",
    toyImg : "./assets/img8.jpg"
  },
  {
    toyName : "T-54 tank",
    toyPrice : "900",
    toyImg : "./assets/img9.jpg"
  },
  {
    toyName : "T-72 tank",
    toyPrice : "1000",
    toyImg : "./assets/img10.jpg"
  }
]