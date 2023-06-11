
const numbers = document.getElementById("inputField");
const audio = document.getElementById("alert-sound")
const blankContainer = document.getElementById("blank container");

function checkDivisibility() {
    const numbersArr = numbers.value.split(",");
    const divisibleNumbers = [];

    for (let i = 0; i < numbersArr.length; i++) {
        const currentNumber = parseInt(numbersArr[i]);
        if (isNaN(currentNumber)) {
        audio.play();
        alert("sorry, you entre a wrong input, please try again");
        }  

        if (currentNumber % 2 === 0) {
            continue;
        }
        if (currentNumber % 3 === 0) {
            divisibleNumbers.push(currentNumber);
        }
    }

    if (divisibleNumbers.length > 0) {
        blankContainer.innerHTML = "Numbers that satisfy the condition: " + divisibleNumbers;
    } else {
        blankContainer.innerHTML = "No numbers satisfy the condition";
    }
}
