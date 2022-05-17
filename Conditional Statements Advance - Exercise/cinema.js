function cinema(input) {

    let kindOfWatching = input[0];
    let numberOfRows = Number(input[1]);
    let numberOfColumns = Number(input[2]);
    let finalPrize = 0;

    if (kindOfWatching === "Premiere") {
        finalPrize = (numberOfRows * numberOfColumns) * 12.00; console.log(finalPrize.toFixed(2));
    } else if (kindOfWatching === "Normal") {
        finalPrize = (numberOfRows * numberOfColumns) * 7.50; console.log(finalPrize.toFixed(2));
    } else if (kindOfWatching === "Discount") {
        finalPrize = (numberOfRows * numberOfColumns) * 5; console.log(finalPrize.toFixed(2));
    }
}