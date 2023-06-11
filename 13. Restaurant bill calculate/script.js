
let dishesonTable;
let persons;
let PreviousDish;
let dishArray = [];
let  dishpricearray = [];
const rupeeSymbol = '\u20B9';

 // input event for input-screen-1
document.querySelector("#dishesOnTable").addEventListener("input", (e)=>{
    dishesonTable = e.target.value;
})
 // click event for screen-1 submit button
 document.querySelector("#dishButton").addEventListener("click" , () => {
    // removing innerHTML of total-bill and each-person-bill form output screen
    document.querySelector("#Total-Bill").innerHTML = "";
    document.querySelector("#Bill-per-person").innerHTML = "";

  
    document.querySelector("#persons").value = null;
    persons = null;

    // checking input price field of dishes filled or not
    if(dishesonTable === undefined){
        alert("please entre number of dishes orderd by customare");
        return undefined;
    }
  
    // removing prvious div tag if present which prevent any unexpected error
    if(PreviousDish){
        for(let i=0; PreviousDish > i; i++){
          dishArray[i].remove(); 
        }
    }
    // enable input-screen-2 before display none
    document.querySelector("#input-screen-2").style.display = "flex";
    for(let i=0; dishesonTable>i; i++){
        // creating div tag for each dish price with label and input tag
        dishArray[i] = document.createElement("div");
        dishArray[i].idName = `dish-${i}`;
        dishArray[i].classList.add("dish");

        document.querySelector("#input-2-body").appendChild(dishArray[i]);
        
        //creating label for dishes in input-screen-2
        dishArray[i].label = document.createElement("label");
        dishArray[i].label.setAttribute("for", `price-dish-${i+1}`)
        dishArray[i].label.textContent = `Dish-${i+1} : ` ;
        dishArray[i].appendChild(dishArray[i].label);


        // creating input-field for dishes in input-screen-2
        dishArray[i].input = document.createElement("input");
        dishArray[i].input.setAttribute("type", "number");
        dishArray[i].input.idName =`Price-Dish-${i+1}`;
        dishArray[i].appendChild(dishArray[i].input);

        // adding input event on dynamically created input tag
        dishArray[i].input.addEventListener("input" , (e) => {
      dishpricearray[i] = e.target.value;
        })
    }
    
	// previous dishes copied in another variable for future use of removing the div tag
   PreviousDish = dishesonTable;
 })

 // click event for create dish button in screen2
 document.querySelector("#input-2-button").addEventListener("click" , () =>{
    // checking input field of all dishes price are filled or not
    for(let i=0; dishesonTable > i; i++){
 if((dishpricearray[i] == undefined) || (dishpricearray[i] == "")){
    alert(`please fill all the input box of "Entre differen-different dishes price "`);
    return undefined;
 }
    }

    // enable inpt-screen-3, before displaying none
    document.querySelector("#input-screen-3").style.display = "flex";
 })

 // input event for peoples in input-screen-3
 document.querySelector("#persons").addEventListener("input", (e) => {
    persons = e.target.value;
 })

 document.querySelector("#persons-btn").addEventListener("click" , () => {
    if(persons == undefined){
        alert(`please fill the input field of "Entre total no. of people sharing dishes"`);
        return undefined;
    }
    // calculating total price of the dishes frome dishArray
    let TotalBill = dishpricearray.reduce((ac, currentVal) =>{
        return (Number(ac) + Number(currentVal));
    })
    // adding innerHTML to total bill

    document.querySelector("#Total-Bill").innerHTML = `Total bill : <span>${(TotalBill).toFixed(2)}${rupeeSymbol}</span>`;

   
    document.querySelector("#Bill-per-person").innerHTML = `Bill to be paid by each person in group : <span>${(TotalBill/Number(persons)).toFixed(2)}${rupeeSymbol}</span>`;
 });