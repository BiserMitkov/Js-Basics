function moving(input) {

    let index = 0;
    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let heigth = Number(input[index]);
    index++;

    let calcSpace = width * length * heigth;

    let nextInput = input[index];
    index++;

    let isThereAnySpace = true;

    let calcMeters = 0;

    while (nextInput !== "Done") {
        let currentNum = Number(nextInput);
        calcMeters += currentNum

        if (calcMeters > calcSpace) {
            let diff = calcMeters - calcSpace;
            isThereAnySpace = false;
            console.log(`No more free space! You need ${Math.abs(diff)} Cubic meters more.`);
            break;
        }
        nextInput = input[index];
        index++;
    }
    if (isThereAnySpace) {
        let diff = calcSpace - calcMeters;
        console.log(`${diff} Cubic meters left.`);
    }
}