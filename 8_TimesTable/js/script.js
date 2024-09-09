/* Seleção de elementos */
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span");
const multiplicationTable = document.querySelector("#multiplication-operations");

/* Funções */
const createTable = (number, multiplicator) => {
    multiplicationTable.innerHTML = "";

    for (i = 1; i <= multiplicator; i++) {
        const result = number * i;
    
        const template = `
            <div class="row">
                <div class="operation">${number} * ${i} = </div>
                <div class="operation-result">${result}</div>
            </div>
        `;
    
        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
    
        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;

    /*for (i = 1; i <= multiplicator; i++) {
        const result = number * i;

        console.log(i);

        const template = `
            <div class="row">
                <div class="operation">${number} * ${i}</div>
                <div class="operation-result">${result}</div>
            </div>
        `;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");
        multiplicationTable.appendChild(row);
    }*/
}

/* Eventos */
if (multiplicationForm)
    multiplicationForm.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const multiplicationNumber = +numberInput.value;
        const multiplicatorNumber = +multiplicatorInput.value;
    
        if (!multiplicationNumber || !multiplicatorNumber)
            return;
    
        createTable(multiplicationNumber, multiplicatorNumber);
    });