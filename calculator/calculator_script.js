
    // function appendNumber(number) {
    //     const screen = document.getElementById('screen');
    //     if (screen.innerText === '0') {
    //         screen.innerText = number;
    //     } else {
    //         screen.innerText += number;
    //     }
    // }

    // function chooseOperator(operator) {
    //     const screen = document.getElementById('screen');
    //     screen.innerText += operator;
    // }

    // function clearScreen() {
    //     const screen = document.getElementById('screen');
    //     screen.innerText = '0';
    // }

    // function calculate() {
    //     const screen = document.getElementById('screen');
    //     screen.innerText = eval(screen.innerText);
    // }

    let currentInput = "";
    let operator = "";
    let previousInput = "";

    function appendNumber(number) {
        if (currentInput.length < 10) {
            if (currentInput === "0") {
                currentInput = number;
            } else {
                currentInput += number;
            }
            updateScreen();
        }
    }

    function chooseOperator(op) {
        if (currentInput === "" && previousInput === "") return;
        if (currentInput !== "") {
            if (previousInput !== "") {
                calculate(); // Perform calculation if there's already a previous input
            }
            previousInput = currentInput;
            currentInput = "";
        }
        operator = op;
        updateScreen();
    }

    function calculate() {
        if (previousInput === "" || currentInput === "") return;

        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Error"; // Prevent division by zero
                break;
            default:
                return;
        }

        currentInput = result.toString();
        previousInput = "";
        operator = "";
        updateScreen();
    }

    function clearScreen() {
        currentInput = "";
        previousInput = "";
        operator = "";
        updateScreen();
    }

    function updateScreen() {
        document.getElementById("screen").innerText = currentInput || previousInput || "0";
    }