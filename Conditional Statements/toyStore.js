function toyShop(input) {
    let priceVacation = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let toysNumber = puzzles + dolls + bears + minions + trucks;
    let toysPrize = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
    let discount = 0;
    let holidaySummary = 0;

    if (toysNumber >= 50) {
        discount = toysPrize - (toysPrize * 0.75);

    } else if (toysNumber <= 50) {
        discount = 0;
    }

    let finalPrice = toysPrize - discount;
    let storeRent = finalPrice - (finalPrice * 0.90);
    let winning = finalPrice - storeRent;

    if (winning >= priceVacation) {
        holidaySummary = (winning - priceVacation).toFixed(2);
        console.log(`Yes! ${holidaySummary} lv left.`);
    } else if (winning <= priceVacation) {
        holidaySummary = Math.abs(winning - priceVacation).toFixed(2);
        console.log(`Not enough money! ${holidaySummary} lv needed.`);
    }

}