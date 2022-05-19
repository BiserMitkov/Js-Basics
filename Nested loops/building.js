function building(input) {

    let numFloors = Number(input[0]);
    let numRooms = Number(input[1]);



    for (let i = numFloors; i > 0; i--) {
        let finalResult = "";
        for (let j = 0; j < numRooms; j++) {
            if (i === numFloors) {
                finalResult += (`L${i}${j} `);
            } else if (i % 2 !== 0) {
                finalResult += (`A${i}${j} `);
            } else if (i % 2 === 0) {
                finalResult += (`O${i}${j} `);
            }
        } console.log(finalResult);
    }
}