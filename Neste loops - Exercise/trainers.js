function trainTheTrainers(input) {

    let index = 0;
    let judges = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let averagePoints = 0;

    let counter = 0;

    let sum = 0;

    

    while (command !== "Finish") {
        let name = "";
        name = command;
        command = input[index];
        let tempSumOfGrade = 0;
        for (let i = 0; i < judges; i++) {
            counter++;
            let grade = Number(input[index]);
            sum += grade;
            index++;
            tempSumOfGrade += grade;
            command = input[index];
        }
        let tempAverage = tempSumOfGrade / judges;
        console.log(`${name} - ${tempAverage.toFixed(2)}.`);
        command = input[index];
        index++;
    }averagePoints = sum / counter;
    console.log(`Student's final assessment is ${averagePoints.toFixed(2)}.`);




}