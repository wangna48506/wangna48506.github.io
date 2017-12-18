
var s = document.getElementById("s");


function val(){
    localStorage.value = s.value;
    console.log(localStorage.value);
}

s.addEventListener("keyup",val);
s.value = localStorage.value