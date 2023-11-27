let operate = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function () {
    const numbersButtons = document.querySelectorAll(".number")
    const operationButtons = document.querySelectorAll('.operator')
    const equalsButton = document.querySelector('.equals')
    const clear = document.querySelector('.clear')
    const decimal = document.querySelector('.decimal')

    const previousScreen = document.querySelector('.previous')
    const currentScreen = document.querySelector('.current')

    numbersButtons.forEach((number) => number.addEventListener("click", function (e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue

    }))

    operationButtons.forEach((op) => op.addEventListener("click", function (e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operate;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function () {
        previousValue = '';
        currentValue = '';
        operate = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equalsButton.addEventListener('click', function () {
        if (currentValue != '' && previousValue != '') {
            calculate()
            previousScreen.textContent = '';
            if (previousValue.length <= 6) {
                currentScreen.textContent = previousValue;
            }
            else {
                currentScreen.textContent = previousValue.slice(0, 6) + '...';
            }
        }
    })

    decimal.addEventListener("click", function () {
        addDecimal();
    })
})

function handleNumber(num) {
    if (currentValue.length <= 6) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operate = op;
    previousValue = currentValue;
    currentValue = '';
}




function calculate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operate === '+') {
        previousValue += currentValue;
        // currentValue = previousValue;
    }
    else if (operate === '-') {
        previousValue -= currentValue;
        // currentValue = previousValue;
    }
    else if (operate === '*') {
        previousValue *= currentValue;
        // currentValue = previousValue;
    }
    else if (operate === '/') {
        previousValue /= currentValue;
        // currentValue = previousValue;
    }
    // console.log(previousValue)
    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();

}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}
function addDecimal() {
    if (!currentValue.includes(".")) {
        currentValue += '.';
    }
}