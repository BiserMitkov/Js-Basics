function fishing(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let people = Number(input[2]);
    let prize = 0;

    if (people <= 6) {
        switch (season) {
            case "Spring":
                prize = 3000 * 0.90; break
            case "Summer":
                prize = 4200 * 0.90; break
            case "Autumn":
                prize = 4200 * 0.90; break
            case "Winter":
                prize = 2600 * 0.90; break
        }
    } else if (11 >= people) {
        switch (season) {
            case "Spring":
                prize = 3000 * 0.85; break
            case "Summer":
                prize = 4200 * 0.85; break
            case "Autumn":
                prize = 4200 * 0.85; break
            case "Winter":
                prize = 2600 * 0.85; break
        }
    } else {
        switch (season) {
            case "Spring":
                prize = 3000 * 0.75; break
            case "Summer":
                prize = 4200 * 0.75; break
            case "Autumn":
                prize = 4200 * 0.75; break
            case "Winter":
                prize = 2600 * 0.75; break
        }
    } if (people % 2 === 0 && season !== "Autumn") {
        prize = prize * 0.95;





    } if (prize > budget) {
        console.log(`Not enough money! You need ${(prize - budget).toFixed(2)} leva.`)
    } else {
        console.log(`Yes! You have ${(budget - prize).toFixed(2)} leva left.`)
    }
}