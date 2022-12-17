
function signup(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    localStorage.setItem("name1",name);
    localStorage.setItem("email1",email);
    localStorage.setItem("password1",password);

    alert("Invalid Email and Password");
}