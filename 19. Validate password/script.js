
document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault(); 
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("input-password").value;
    const inputError = document.getElementById("error-message")
    const inputValid = document.getElementById("validation-message");

  
    if (email.indexOf("@") === -1 || password.length < 8) {
      inputError.style.display = "block";
      inputValid.style.display = "none";
      
    } else {
      inputError.style.display = "none";
      inputValid.style.display = "block";

    }
  });

  // const name = "nitishOfficial";
  // const index = name.indexOf("z");
  // console.log(index);
  
 



