function salary(input) {

    let counterTap = Number(input[0]);
    let payment = Number(input[1]);

    for (i = 1; i <= counterTap; i++) {
        let currentTap = input[i + 1];
        if (currentTap === "Facebook") {
            payment -= 150;
        } else if (currentTap === "Instagram") {
            payment -= 100;
        } else if (currentTap === "Reddit") {
            payment -= 50;
        }
    }
    if (payment <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(payment);
    }
}