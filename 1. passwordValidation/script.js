
function validatePassword(){
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmPass");
    var dataValidation = document.getElementById("final-result")

    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    if(password === confirmPassword){
        const audio = new Audio('./good.mp3');
        console.log(audio);
        audio.play();
        dataValidation.innerText = " Password Matched. Password validation Successful."
        dataValidation.style.color="green"
        dataValidation.style.fontSize = "25px";
    } else {
        const audio = new Audio('./alarm.mp3');
        console.log(audio);
        audio.play();
        dataValidation.innerText = "Password didn't match. Password validation unsuccessful.  "
        dataValidation.style.color = "red";
        dataValidation.style.fontSize = "25px";
    }
    
}

