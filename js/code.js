"use strict";

const creditCardNumber = (cardNumber) => {
    let newString = "";
    for (let i = 0; i < cardNumber.length; i++) {
        newString += cardNumber[i];
        if ((i % 4) === 3 && (i !== 0) ) {
            newString +=" ";
        }
    }
    return newString;
}

const generateExampleCard = () => {
    exampleName.textContent = cardData.username;
    exampleNumberCard.textContent = creditCardNumber(cardData.cardNumber);
    exampleDate.textContent = `${cardData.expDateMonth}/${cardData.expDateYear}`
    exampleCVC.textContent = cardData.cvc;
}

const fillCardData = () => {
    cardData.username = inputUsername.value || "Jane Appleseed";
    cardData.cardNumber = inputCardNumber.value || "0000000000000000";
    cardData.expDateMonth = inputExpDateMonth.value || "00";
    cardData.expDateYear = inputExpDateYear.value || "00";
    cardData.cvc = inputCVC.value || "000";
}

const validateInput = (input) => {
    switch (input) {
        case username:
            if(input.value.trim().length > 0) {
                return false;
            } else {
                return "Can't be blank";
            }
        case cardNumber:
            if(input.value.trim().length === 0) {
                return "Can't be blank";
            }
            if(!reg.test(input.value)) {
                return "Wrong format, numbers only";
            }
            return false;
        case expDateMonth:
            if(input.value.trim().length === 0) {
                return "Can't be blank";
            }
            if(!reg.test(input.value)) {
                return "Wrong format, numbers only";
            }
            return false;
        case expDateYear:
            if(input.value.trim().length === 0) {
                return "Can't be blank";
            }
            if(!reg.test(input.value)) {
                return "Wrong format, numbers only";
            }
            return false;
        case cvc:
            if(input.value.trim().length === 0) {
                return "Can't be blank";
            }
            if(!reg.test(input.value)) {
                return "Wrong format, numbers only";
            }
            return false;
    }
}

const showError = (validate, input) => {
    let message = document.createElement("span");
    message.textContent = !validate ? "" : validate;
    message.classList.add("error__message--text");
    if(!validate) {
      input.classList.remove("error__message--input");
      if(input.parentElement.lastElementChild.className === "error__message--text" || input.parentElement.parentElement.lastElementChild.className === "error__message--text") {
        input.parentElement.lastElementChild.textContent = "";
      }
    } else {
      input.classList.add("error__message--input");
      if(input.parentElement.lastElementChild.className === "error__message--text" || input.parentElement.parentElement.lastElementChild.className === "error__message--text") {
        input.parentElement.lastElementChild.textContent = validate;
        return;
      }
      if (input !== expDateMonth && input !== expDateYear) {
        input.parentElement.append(message);
      }
      if (input === expDateMonth) {
        input.parentElement.parentElement.append(message);
      }
    }
}

const clearInput = () => {
    inputUsername.value = "";
    inputCardNumber.value = ""; 
    inputExpDateMonth.value = "";
    inputExpDateYear.value = "";
    inputCVC.value = "";
}

// regular expression only numbers
const reg = new RegExp('^[0-9]+$');

// Example Card Data
const exampleName = document.getElementById("exampleName");
const exampleCardNumber = document.getElementById("exampleCardNumber");
const exampleDate = document.getElementById("exampleDate");
const exampleCVC = document.getElementById("exampleCVC");

// Form
const form = document.getElementById("form");

// Form's input
const inputUsername = document.getElementById("username");
const inputCardNumber = document.getElementById("cardNumber");
const inputExpDateMonth = document.getElementById("expDateMonth");
const inputExpDateYear = document.getElementById("expDateYear");
const inputCVC = document.getElementById("cvc");

const cardData = {
    username: "" || "Jane Appleseed",
    cardNumber: "" || "0000000000000000",
    expDateMonth: "" || "00",
    expDateYear: "" || "00",
    cvc: "" || "000",
}

// Message Succesfully Submitted
const completed = document.getElementById("completed");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateInput(inputUsername) && !validateInput(inputCardNumber) && !validateInput(inputExpDateMonth) && !validateInput(inputExpDateYear) && !validateInput(inputCVC)) {
        fillCardData();

        generateExampleCard();

        completed.classList.toggle("hide__message");
        form.classList.toggle("hide__message");

        showError(validateInput(inputUsername), inputUsername);
        showError(validateInput(inputCardNumber), inputCardNumber);
        showError(validateInput(inputExpDateMonth), inputExpDateMonth);
        showError(validateInput(inputExpDateYear), inputExpDateYear);
        showError(validateInput(inputCVC), inputCVC);

        clearInput();
    } else {
        fillCardData();

        generateExampleCard();

        showError(validateInput(inputUsername), inputUsername);
        showError(validateInput(inputCardNumber), inputCardNumber);
        showError(validateInput(inputExpDateMonth), inputExpDateMonth);
        showError(validateInput(inputExpDateYear), inputExpDateYear);
        showError(validateInput(inputCVC), inputCVC);
    }
})

generateExampleCard();
