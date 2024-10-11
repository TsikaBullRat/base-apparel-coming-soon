let email = document.getElementById("email");

function emailCheck(){
    let pass = false
    console.log(email.value)
    
    if(email.value.indexOf("@") !== -1){
        pass = true
    }
    if(pass){
        alert("Done")
    }else{
        email.style.borderWidth = "2px"
        email.style.borderColor = "hsl(0, 93%, 68%)"
    }
}