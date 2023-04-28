let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let userInput = document.getElementById('input-text');


function generateQR() {
    if(userInput.value.length > 0) {
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+userInput.value;
        imgBox.classList.add('show-img');
    }
    else {
        userInput.classList.add('error');
        setTimeout(()=> {
            userInput.classList.remove('error');
        },1000);
    }
}