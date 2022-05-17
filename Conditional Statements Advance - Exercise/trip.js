function skiTrip(input) {

    let days = Number(input[0]);
    let kind = input[1];
    let opinion = input[2];
    let finalPrize = 0;
    days = days - 1;



    if (days < 10) {
        switch (kind) {
            case "room for one person": finalPrize = days * 18.00; break
            case "apartment": finalPrize = (days * 25.00) * 0.70; break
            case "president apartment": finalPrize = (days * 35.00) * 0.90; break
        }
    } else if (days > 10 && days <= 15) {
        switch (kind) {
            case "room for one person": finalPrize = days * 18.00; break
            case "apartment": finalPrize = (days * 25.00) * 0.65; break
            case "president apartment": finalPrize = (days * 35.00) * 0.85; break
        }
    } else if (days > 15) {
        switch (kind) {
            case "room for one person": finalPrize = days * 18.00; break
            case "apartment": finalPrize = (days * 25.00) * 0.50; break
            case "president apartment": finalPrize = (days * 35.00) * 0.80; break
        }
    } if (opinion === "positive") {
        finalPrize = finalPrize + (finalPrize * 0.25);
        console.log(finalPrize.toFixed(2))
    } else {
        finalPrize = finalPrize - (finalPrize * 0.10);
        console.log(finalPrize.toFixed(2));
    }
}