function cake(input) {

    let index = 0;
    let length = Number(input[index]);
    index++;

    let width = Number(input[index]);
    index++;

    let calcSize = length * width;

    let nextInput = input[index];
    index++;

    let isHavePiecesLeft = true;

    while (nextInput !== "STOP") {
        let currentPieces = Number(nextInput);
        calcSize -= currentPieces;

        if (calcSize <= 0) {
            isHavePiecesLeft = false;
            console.log(`No more cake left! You need ${Math.abs(calcSize)} pieces more.`);
            break;
        }
        nextInput = input[index];
        index++;
    }
    if (isHavePiecesLeft) {
        console.log(`${calcSize} pieces are left.`);
    }
}