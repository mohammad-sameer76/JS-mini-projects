

var accordion = document.querySelectorAll(".accordion");

accordion.forEach(function (acc) {


    acc.addEventListener("click", function () {
        //other
        accordion.forEach(function(othAcc){
            if (othAcc != acc){
                var otherIcon = othAcc.querySelector(".btn");
                var otherAns = othAcc.querySelector(".answer");
                otherIcon.classList.remove("active");
                otherAns.classList.remove("active");
            
            }

        });

        var icon = acc.querySelector(".btn");
        var answer = acc.querySelector(".answer");
        // if (answer.classList.contains("active")) {
        //     icon.classList.remove("active");
        //     answer.classList.remove("active");
        // }
        // else {
        //     icon.classList.add("active");
        //     answer.classList.add("active");

        // }
        // if (!answer.classList.contains("active")) {
        //         icon.classList.add("active");
        //         answer.classList.add("active");
        //     }

        icon.classList.toggle("active");
        answer.classList.toggle("active");
    });
});





