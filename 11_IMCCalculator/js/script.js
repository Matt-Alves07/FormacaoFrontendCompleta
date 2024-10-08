// IMC DATA
const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Obesidade grave",
      obesity: "III",
    },
];

/* Variáveis */
const imcTable = document.querySelector("#imc-table");
const imcInfo = document.querySelector("#imc-info span");
const imcNumber = document.querySelector("#imc-number span");
//Buttons
const processBtn = document.querySelector("#process-btn");
const clearBtn = document.querySelector("#clear-btn");
const backBtn = document.querySelector("#back-btn");
//Inputs
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
//Containers
const dataContainer = document.querySelector("#data-container");
const resultContainer = document.querySelector("#result-container");

/* Funções */
function createTable(data) {
    data.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("table-data");

        const classification = document.createElement("p");
        classification.innerText = item.classification;

        const info = document.createElement("p");
        info.innerText = item.info;

        const obesity = document.createElement("p");
        obesity.innerText = item.obesity;

        div.appendChild(classification);
        div.appendChild(info);
        div.appendChild(obesity);

        imcTable.appendChild(div);
    });
}

function clearInputs() {
    heightInput.value = "";
    weightInput.value = "";
    imcInfo.classList = "";
    imcNumber.classList = "";
}

function validateInput(text) {
    return text.replace(/[^0-9,]+$/g, "");
}

function calcIMC(weight, height) {
  return (weight / (height * height)).toFixed(1);
}

function showOrHideResults() {
  dataContainer.classList.toggle("hide");
  resultContainer.classList.toggle("hide");
}

/* Inicialização */
createTable(data);

/* Eventos */
[heightInput, weightInput].forEach((ele) => {
  ele.addEventListener("input", (e) => {
    const updatedValue = validateInput(e.target.value);

    e.target.value = updatedValue;
  });
});

processBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  const weight = +weightInput.value.replace(",", ".");
  const height = +heightInput.value.replace(",", ".");

  if ((!weight || isNaN(weight)) || (!height || isNaN(height))){
    console.log("Bad request");
    return;
  }

  const imcValue = calcIMC(weight, height);

  let info;

  data.forEach((item) => {
    if (imcValue >= item.min && imcValue <= item.max)
      info = item;
  });

  if (!info) {
    console.log("IMC não encontrado");
    return;
  }

  imcNumber.innerText = imcValue;
  imcInfo.innerText = info.info;

  switch(info.info) {
    case "Magreza":
      imcInfo.classList.add("low");
      imcNumber.classList.add("low");

      break;
    case "Normal":
      imcInfo.classList.add("good");
      imcNumber.classList.add("good");

      break;

    case "Sobrepeso":
      imcInfo.classList.add("low");
      imcNumber.classList.add("low");

      break;
    case "Obesidade":
      imcInfo.classList.add("medium");
      imcNumber.classList.add("medium");

      break;
    case "Obesidade grave":
      imcInfo.classList.add("high");
      imcNumber.classList.add("high");

      break;
  };

  showOrHideResults();
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInputs();

  heightInput.focus();
});

backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInputs();
  showOrHideResults();

  heightInput.focus();
})