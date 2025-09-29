var contextMenu = document.querySelector(".wrapper");
var shareMenu = document.querySelector(".share-menu");


document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    let x = e.clientX, y = e.clientY;

    let winWidth = window.innerWidth;
    let cmWidth = contextMenu.offsetWidth;
    let winHeight = window.innerHeight;
    let cmHeight = contextMenu.offsetHeight;
    let smWidth = shareMenu.offsetWidth;

    if(x >  (winWidth - cmWidth - smWidth) ){
        shareMenu.style.left = -200 +"px";
    }
    else{
        
        shareMenu.style.left = "";
        shareMenu.style.right = -200 +"px";
    }

    // x = (x > winWidth - cmWidth) ? winWidth - cmWidth : x;

    // y = (y > winHeight - cmHeight) ? winHeight - cmHeight : y;



    contextMenu.style.left = x + "px";
    contextMenu.style.top = y + "px";
    contextMenu.style.visibility = "visible";
});

document.addEventListener("click", function () {
    contextMenu.style.visibility = "hidden";
});

