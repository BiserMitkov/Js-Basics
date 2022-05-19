function equalSumsEvenOddPosition(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLine = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let num = "" + i;
        let evenSum = 0;
        let oddSum = 0;
        for(let j = 0; j <= num.length; j++) {
            let currentNum = Number(num.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentNum;
            }else {
                oddSum += currentNum;
            }
            
        }
        if (oddSum === evenSum) {
            printLine += `${i} `;
        }
    }
    console.log(printLine);


}