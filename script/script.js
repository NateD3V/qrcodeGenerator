// Seleções
const container = document.querySelector('.container')
const qrCodeBtn = document.querySelector('#qr-form button')
const qrCodeInput = document.querySelector('#qr-form input')
const qrCodeImg = document.querySelector('#qr-code img')
// Eventos

// Gerar qrcode
function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value;
    if(!qrCodeInputValue) return;
    qrCodeBtn.innerHTML = 'gerando Código...';
    qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`//API goqr.me/api/ 

    qrCodeImg.addEventListener('load',()=>{
        container.classList.add('active')
        qrCodeBtn.innerHTML = 'Código gerado com sucesso!';

    })
}

qrCodeBtn.addEventListener('click',()=>{
    generateQrCode();
})

qrCodeInput.addEventListener('keydown',(e)=>{
    if(e.code === 'Enter'){
        generateQrCode();
    }
    
})

// Limpar área do qr code
qrCodeInput.addEventListener('keyup',()=>{
    if(!qrCodeInput.value){
        container.classList.remove('active')
        qrCodeBtn.innerHTML = 'Gerar QR Code'
    }
})