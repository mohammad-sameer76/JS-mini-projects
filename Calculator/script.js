
var row = document.querySelectorAll(".row");
let display = document.querySelector(".display input");


row.forEach(function (row) {
    row.addEventListener("click", function (e) {
        if (e.target.classList.contains("operator")) {
            switch (e.target.value) {
                case "AC":
                    display.value = "";
                    break
                case "DE":
                    display.value = display.value.slice(0, -1);
                    break
                case "=":
                    display.value = eval(display.value);
                    break
                default:
                    display.value += e.target.value;
            }
        }
        else if (e.target.tagName == "INPUT") {
            display.value += e.target.value;
        }

    });



});

