function swimming(input) {
    let record = Number(input[0]);
    let distanceMetres = Number(input[1]);
    let timeInSeconds = Number(input[2]);
    let distanceInSeconds = distanceMetres * timeInSeconds;
    let waterResistance = Math.floor(distanceMetres / 15) * 12.5;
    let timeCalc = distanceInSeconds + waterResistance;

    if (record > timeCalc) {
        timeCalc = timeCalc.toFixed(2);
        console.log(`Yes, he succeeded! The new world record is ${timeCalc} seconds.`);


    } else if (record <= timeCalc) {
        timeCalc = (timeCalc - record).toFixed(2);
        console.log(`No, he failed! He was ${timeCalc} seconds slower.`);
    }
}