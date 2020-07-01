let currencyElement = document.querySelector(".js-form__select");
let amountElement = document.querySelector(".js-form__input");
let valueElement = document.querySelector(".js-value");
let submitElement = document.querySelector(".js-form__submit");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = amountElement.value;
    let currency = currencyElement.value;
    let value;
    let currencyName;
    switch (currency){
        case "BGN":
            value = amount * 0.4398;
            currencyName = "BGN";
            break;
        case "EUR":
            value = amount / 4.4483;
            currencyName = "EUR";
            break;
        case "USD":
            value = amount / 3.9627;
            currencyName = "USD";
            break;
    }
    valueElement.innerHTML = value.toFixed(2) + currencyName;
})