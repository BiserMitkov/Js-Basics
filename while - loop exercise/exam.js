function examPreparation(input) {

    let index = 0;
    let neededFailGrades = Number(input[index++]);

    let examCounter = 0;
    let gradesCounter = 0;
    let failedGradesCounter = 0;
    let isStudentPassed = true;
    let startInput = input[index++];
    let lastExam = "";
    
    while (startInput !== "Enough") {
        let currentExamName = startInput;
        let currentExamGrade = Number(input[index++]);
        gradesCounter+= currentExamGrade
        examCounter++;
        lastExam = currentExamName;
        if (currentExamGrade <= 4) {
            failedGradesCounter++;
        }
        if (failedGradesCounter === neededFailGrades) {
            console.log(`You need a break, ${failedGradesCounter} poor grades.`);
            isStudentPassed = false;
            break;
        }
        startInput = input[index++];
    }
    if (isStudentPassed) {
        console.log(`Average score: ${(gradesCounter / examCounter).toFixed(2)}`);
        console.log(`Number of problems: ${examCounter}`);
        console.log(`Last problem: ${lastExam}`);
    }
}