function maxNumber(input) {

    let currentInput = input[0];
    index = 1;
    let max = Number.MAX_SAFE_INTEGER;

    while (currentInput !== "Stop") {
        let currentNum = Number(currentInput);

        if (currentNum < max) {
            max = currentNum;
        }
        currentInput = input[index];
        index++;
    }
    console.log(max);
}