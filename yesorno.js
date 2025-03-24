let count = 0;
alpha.style.display = "none";
document.getElementById("YesPlease").onclick = function (){
    window.location.href = "Yay.html";
}
var a = document.getElementById("heading");
var b = "Try again";

document.getElementById("noPlease").onclick = function (){
    a.innerHTML = b;
    b = b+'!';
    a.innerHTML = b;    
    count++
    if (count > 5){
        alpha.style.display = "block";
    } 
}
