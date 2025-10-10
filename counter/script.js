let count = 0;

var value = document.getElementById("value");
var btns = document.querySelectorAll(".btn");


btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const style = e.currentTarget.classList;
        if (style.contains("decrease")){
            count--;
        }
        else if(style.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count <0){
            value.style.color = "red";
        }
        if (count ===0){
            value.style.color = "#222";
        }
        value.innerText =count;
    });
});