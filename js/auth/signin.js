const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSingin = document.getElementById("btnSignin");


btnSingin.addEventListener("click", checkCredentials);

function checkCredentials(){

  
    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){ 
        //Il faudra récuprer le vrai token
        const token ="fkjldmsjfglmdsjgklsgkdsjklgjdfklmghjkdfl";
        setToken(token);
        //placer ce token en cookie

        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }

}


    
    