function operation(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let sign = input[2];
    let result = 0;

    if (sign === "+" || sign === "-" || sign === "*" || sign === "/" || sign === "%") {
    } switch (sign) {
        case "+": result = firstNumber + secondNumber;
            if (result % 2 === 0) {
                console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - even`)
            } else {
                console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - odd`)
            }
            ; break
        case "-": result = firstNumber - secondNumber;
            if (result % 2 === 0) {
                console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - even`)
            } else {
                console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - odd`)
            }
            ; break
        case "*": result = firstNumber * secondNumber;
            if (result % 2 === 0) {
                console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - even`);
            } else {
                console.log(`${firstNumber} ${sign} ${secondNumber} = ${result} - odd`);
            }
            ; break
    } if (firstNumber !== 0 && secondNumber !== 0) {
        switch (sign) {
            case "/": result = firstNumber / secondNumber;
                console.log(`${firstNumber} ${sign} ${secondNumber} = ${(result).toFixed(2)}`); break
            case "%": result = firstNumber % secondNumber;
                console.log(`${firstNumber} ${sign} ${secondNumber} = ${result}`); break
        }
    } else {
        console.log(`Cannot divide ${firstNumber} by zero`);
    }
}