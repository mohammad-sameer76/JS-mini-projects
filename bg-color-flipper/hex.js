const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click" ,function(){

    var randomColor = "#";
    var randomNumber;
    while (randomColor.length < 7){
        randomNumber = getRandom();
        randomColor = randomColor + colors[randomNumber];
    }
    document.body.style.background = randomColor;
    color.innerText = randomColor;   
})


function getRandom(){
    return Math.floor(Math.random()*colors.length);
}
