function tennis(input) {


    let tournamentsNumber = Number(input[0]);

    let startPoints = Number(input[1]);

    let finalScore = 0;
    let winSumm = 0;

    for (let i = 1; i <= tournamentsNumber; i++) {
        let x = input[i + 1];
        if (x === "F") {
            finalScore += 1200;
        } else if (x === "SF") {
            finalScore += 720;
        } else if (x === "W") {
            winSumm++;
            finalScore += 2000;
        }

    }
    let allSummary = finalScore + startPoints;
    console.log(`Final points: ${allSummary}`);
    console.log(`Average points: ${Math.floor(finalScore / tournamentsNumber)}`)
    let winMatches = winSumm / tournamentsNumber * 100;
    console.log(`${winMatches.toFixed(2)}%`);
}