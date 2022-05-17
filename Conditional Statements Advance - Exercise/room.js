function hotel(input) {

    let month = input[0];
    let nightsCount = Number(input[1]);
    let studio = 0;
    let apartment = 0;

    if (nightsCount <= 7) {
        switch (month) {
            case "May": studio = nightsCount * 50;
                apartment = nightsCount * 65;
            case "October": studio = nightsCount * 50;
                apartment = nightsCount * 65; break
            case "June": studio = nightsCount * 75.20;
                apartment = nightsCount * 68.70;
            case "September": studio = nightsCount * 75.20;
                apartment = nightsCount * 68.70; break
            case "August": studio = nightsCount * 76;
                apartment = nightsCount * 77; break
            case "July": studio = nightsCount * 76;
                apartment = nightsCount * 77; break
        }
    }
    else if (7 < nightsCount && nightsCount <= 14) {
        switch (month) {
            case "May": studio = (nightsCount * 50) * 0.95;
                apartment = nightsCount * 65; break
            case "October": studio = (nightsCount * 50) * 0.95;
                apartment = nightsCount * 65; break
            case "June": studio = nightsCount * 75.20;
                apartment = nightsCount * 68.70;
            case "September": studio = nightsCount * 75.20;
                apartment = nightsCount * 68.70; break
            case "August": studio = nightsCount * 76;
                apartment = nightsCount * 77; break
            case "July": studio = nightsCount * 76;
                apartment = nightsCount * 77; break
        }
    } else if (nightsCount > 14) {
        switch (month) {
            case "May": studio = (nightsCount * 50) * 0.70;
                apartment = (nightsCount * 65) * 0.90;
            case "October": studio = (nightsCount * 50) * 0.70;
                apartment = (nightsCount * 65) * 0.90; break
            case "June": studio = (nightsCount * 75.20) * 0.80;
                apartment = (nightsCount * 68.70) * 0.90;
            case "September": studio = (nightsCount * 75.20) * 0.80;
                apartment = (nightsCount * 68.70) * 0.90; break
            case "August": studio = nightsCount * 76;
                apartment = (nightsCount * 77) * 0.90; break
            case "July": studio = nightsCount * 76;
                apartment = (nightsCount * 77) * 0.90; break
        }
    }
    console.log(`Apartment: ${(apartment).toFixed(2)} lv.`)
    console.log(`Studio: ${(studio).toFixed(2)} lv.`);
}