function calculateRent(){
    const rentDuration = parseInt(document.querySelector("#rentDuration").value);
    const carType = document.querySelector("#sltopt").value;
     var rentalCost;

     if(carType === "Economy"){
        rentalCost = 4000 ;
     }else if(carType === "Midsize"){
        rentalCost = 10000;
     }else if(carType === "Luxury"){
        rentalCost = 20000;
     }

     const totalCost = rentalCost * rentDuration;

     // selecting output from dom
     const outputScreen = document.querySelector("#output");
     //creating new span tag
     const newSpanTag = document.createElement("span");
     const totalCostText = document.createTextNode("Rs." + totalCost + "/-");
     newSpanTag.appendChild(totalCostText);
     newSpanTag.style.color = "green";
     newSpanTag.style.fontWeight = "bold";
     outputScreen.innerHTML = "Total Rental Cost: ";
     outputScreen.appendChild(newSpanTag);
     


     


}