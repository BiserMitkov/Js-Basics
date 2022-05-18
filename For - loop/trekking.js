function trekkingMania(input) {

    let numberOfGroups = Number(input[0]);

    let musalaGroup = 0;
    let monblanGroup = 0;
    let kilimandjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;
    let allSumm = 0;

    for (let i = 1; i <= numberOfGroups; i++) {
        let x = Number(input[i]);
        if (x <= 5) {
            musalaGroup += x;
        } else if (6 <= x && x <= 12) {
            monblanGroup += x;
        } else if (13 <= x && x <= 25) {
            kilimandjaroGroup += x;
        } else if (26 <= x && x <= 40) {
            k2Group += x;
        } else if (x >= 41) {
            everestGroup += x;
        }
    }
    allSumm = musalaGroup + monblanGroup + kilimandjaroGroup + k2Group + everestGroup;


    let musalaPercent = musalaGroup / allSumm * 100;
    let monblanPercent = monblanGroup / allSumm * 100;
    let kilimandjaroPercent = kilimandjaroGroup / allSumm * 100;
    let k2Percent = k2Group / allSumm * 100;
    let everestPercent = everestGroup / allSumm * 100;
    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}