var imageBox = document.getElementById("imageBox");
var qrImage = document.getElementById("qrImage");
var qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {

        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        imageBox.classList.add("checked");

    }
    else {
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }
}