const colors = ["red","green","rgba(133,122,200)","#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandom();
    document.body.style.background = colors[randomNumber];
    color.innerText = colors[randomNumber];
})

function getRandom(){
    return Math.floor(Math.random()*colors.length);
}