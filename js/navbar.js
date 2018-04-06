var c =document.getElementById("collapse");
var t =document.getElementById("hamburger");

t.addEventListener("click", function(){
    if (c.classList.contains("on")) {
        c.classList.remove("on");
        t.src="images/hamburger.svg";
    } else {
        c.classList.add("on");
        t.src="images/close.svg";
    }
})