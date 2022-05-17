function movieReleasing(input) {

    let movieBudget = Number(input[0]);
    let statsNumber = Number(input[1]);
    let clothes = Number(input[2]);
    let decorPrize = movieBudget - (movieBudget * 0.90);
    let clothesPrize = statsNumber * clothes;
    let discountClothesPrize = 0;


    if (statsNumber > 150) {
        discountClothesPrize = Math.abs(clothesPrize - (clothesPrize * 0.90)).toFixed(3);

    } else if (statsNumber < 150) {
        discountClothesPrize = 0;
    }

    let finalClothes = clothesPrize - discountClothesPrize;
    let finalAmmount = decorPrize + finalClothes;
    let filmStarting = Math.abs(movieBudget - finalAmmount).toFixed(2);

    if (finalAmmount > movieBudget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${filmStarting} leva more.`)

    } else if (finalAmmount <= movieBudget) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${filmStarting} leva left.`)
    }
}