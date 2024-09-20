/* Elements */
const generatePasswordBtn = document.querySelector("#generate-password");
const generatedPasswordDiv = document.querySelector("#generated-password");

/* Functions */
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = () => {
    return Math
        .floor(Math.random() * 10)
        .toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/,.!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
    let password = "";

    //   Segunda versão
    const passwordLength = 10;

    const generators = [getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol];

    for (i = 0; i < passwordLength; i = i + generators.length) {
      generators.forEach(() => {
        const randomValue = generators[Math.floor(Math.random() * generators.length)]();

        password += randomValue;
      });
    }

    password = password.slice(0, passwordLength);

    generatedPasswordDiv.style.display = "block";
    generatedPasswordDiv.querySelector("h4").innerText = password;
};

// Second version, wich I didn't like
/* const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol ) => {
    let password = "";
    const passwordLength = +lengthInput.value;

    const generators = [];

    if (lettersInput.checked) {
      generators.push(getLetterLowerCase, getLetterUpperCase);
    }

    if (numbersInput.checked) {
      generators.push(getNumber);
    }

    if (symbolsInput.checked) {
      generators.push(getSymbol);
    }

    console.log(generators.length);

    if (generators.length === 0) {
      return;
    }

    for (i = 0; i < passwordLength; i = i + generators.length) {
      generators.forEach(() => {
        const randomValue =
          generators[Math.floor(Math.random() * generators.length)]();

        password += randomValue;
      });
    }

    password = password.slice(0, passwordLength);

    generatedPasswordDiv.style.display = "block";
    generatedPasswordDiv.querySelector("h4").innerText = password;
}; */

/* Events */
generatePasswordBtn.addEventListener("click", (e) => {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol);
});

generatedPasswordDiv.addEventListener("click", () => {
    const password = generatedPasswordDiv.querySelector("h4").innerText;
    navigator.clipboard.writeText(password);
});

// Second version, wich I didn't like
/*openCloseGeneratorButton.addEventListener("click", () => {
    generatePasswordContainer.classList.toggle("hide");
});

  copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault();

    const password = generatedPasswordElement.querySelector("h4").innerText;

    navigator.clipboard.writeText(password).then(() => {
      copyPasswordButton.innerText = "Senha copiada com sucesso!";

      setTimeout(() => {
        copyPasswordButton.innerText = "Copiar";
      }, 1000);
    });
});*/