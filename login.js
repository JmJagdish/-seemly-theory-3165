function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
console.log(email);
    let email1=localStorage.getItem("email1");
    let password1=localStorage.getItem("password1");

    if(email==email1 && password==password1){
        window.location.href="index.html";
    }else{
        alert("Invalid Email and Password");
    }
}