function lily(input) {

    let age = Number(input[0]);
    let washingPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let savingMoney = 0;
    let toyCounts = 0;
    let money = 10;


    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savingMoney += money;
            money += 10;
            savingMoney -= 1;
        } else {
            toyCounts++;
        }
    }
    savingMoney += toyCounts * toyPrice;

    if (savingMoney >= washingPrice) {
        console.log(`Yes! ${(savingMoney - washingPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingPrice - savingMoney).toFixed(2)}`);
    }
}