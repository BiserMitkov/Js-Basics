function sequence(input) {

    let finalReachable = Number(input[0]);

    let counter = 1;

    while (counter <= finalReachable) {
        console.log(counter);
        counter *= 2;
        counter++;
    }
}