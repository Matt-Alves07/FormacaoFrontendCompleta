/* Variáveis */
const container = document.querySelector(".container");
const qrInput = document.querySelector("#qr-form input");
const qrButton = document.querySelector("#qr-form button");
const qrImageResult = document.querySelector("#qr-code img");

/* Eventos */
qrButton.addEventListener("click", () => {
    GenerateQRCode();
});

qrInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        GenerateQRCode();
});

qrInput.addEventListener("keyup", (e) => {
    if (qrInput.value === "")
        container.classList.remove("active");
});

/* Funções */
function GenerateQRCode() {
    const inputValue = qrInput.value;
    if (!inputValue)
        return;

    qrButton.innerHTML = "Gerando código...";

    qrImageResult.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;
    qrImageResult.addEventListener("load", () => {
        container.classList.add("active");
    });

    qrButton.innerHTML = "Gerar QR code";
}