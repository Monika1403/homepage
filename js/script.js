{
const currencyElement = document.querySelector(".js-form__select");
const amountElement = document.querySelector(".js-form__input");
const valueElement = document.querySelector(".js-value");
const formElement = document.querySelector(".js-form");

const calculateValue = (amount, currency) => {
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
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = amountElement.value;
    const currency = currencyElement.value;
    let value = calculateValue(amount, currency);
    let currencyName;

    valueElement.innerHTML = value.toFixed(2) + currencyName;
})
}