function sumOfTwoNumbers(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationCounter = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        for (let j = firstNum; j <= secondNum; j++) {
            combinationCounter++;
            if (i + j === magicNumber) {
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${magicNumber})`);
                return;
            }
        }
    }
    console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);

}