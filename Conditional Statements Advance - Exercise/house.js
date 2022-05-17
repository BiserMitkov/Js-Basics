function garden(input) {

    let typeOfFlowers = input[0];
    let countOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let finalPrize = 0;

    switch (typeOfFlowers) {
        case "Roses": finalPrize = countOfFlowers * 5
            if (countOfFlowers > 80) {
                finalPrize = finalPrize * 0.90
            }
            ; break

        case "Dahlias": finalPrize = countOfFlowers * 3.80
            if (countOfFlowers > 90) {
                finalPrize = finalPrize * 0.85;
            }
            ; break
        case "Tulips": finalPrize = countOfFlowers * 2.80
            if (countOfFlowers > 80) {
                finalPrize = finalPrize * 0.85;
            }
            ; break
        case "Narcissus": finalPrize = countOfFlowers * 3;
            if (countOfFlowers < 120) {
                finalPrize = finalPrize * 1.15
            }
            ; break
        case "Gladiolus": finalPrize = countOfFlowers * 2.50;
            if (countOfFlowers < 80) {
                finalPrize = finalPrize * 1.20;
            }
            ; break

    }
    if (finalPrize > budget) {
        console.log(`Not enough money, you need ${(finalPrize - budget).toFixed(2)} leva more.`)
    } else {
        console.log(`Hey, you have a great garden with ${countOfFlowers} ${typeOfFlowers} and ${(budget - finalPrize).toFixed(2)} leva left.`)
    }
}