function exam(input) {

    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hourArriving = Number(input[2]);
    let minutesArriving = Number(input[3]);

    let examInMin = hourExam * 60 + minutesExam;
    let arrivingInMin = hourArriving * 60 + minutesArriving;

    if (arrivingInMin > examInMin) {
        console.log("Late");

        let diff = arrivingInMin - examInMin;

        if (diff >= 60) {
            let h = Math.floor(diff / 60);
            let m = diff % 60;

            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        } else {
            let min = diff % 60;
            console.log(`${min} minutes after the start`);
        }
    } else if (examInMin - arrivingInMin <= 30) {
        console.log("On time");
        let diff = examInMin - arrivingInMin;
        if (diff !== 0) {
            let min = diff % 60;
            console.log(`${min} minutes before the start`)
        }
    } else {
        console.log("Early");
        let diff = examInMin - arrivingInMin;
        if (diff >= 60) {
            let h = Math.floor(diff / 60);
            let min = diff % 60;
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`)
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            let min = diff % 60;
            console.log(`${min} minutes before the start`);
        }
    }
}