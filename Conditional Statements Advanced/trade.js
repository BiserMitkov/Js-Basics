function tradeCommissions(input) {

    let city = input[0];
    let sale = Number(input[1]);
    let salary = 0;

    if (0 <= sale && sale <= 500) {
        switch (city) {
            case "Sofia": salary = (sale * 5) / 100; console.log(salary.toFixed(2)); break;
            case "Varna": salary = (sale * 4.5) / 100; console.log(salary.toFixed(2)); break;
            case "Plovdiv": salary = (sale * 5.5) / 100; console.log(salary.toFixed(2)); break;
            default:
                console.log("error"); break;
        }
    } else if (500 <= sale && sale <= 1000) {
        switch (city) {
            case "Sofia": salary = (sale * 7) / 100; console.log(salary.toFixed(2)); break;
            case "Varna": salary = (sale * 7.5) / 100; console.log(salary.toFixed(2)); break;
            case "Plovdiv": salary = (sale * 8) / 100; console.log(salary.toFixed(2)); break;
            default:
                console.log("error"); break;
        }
    } else if (1000 <= sale && sale <= 10000) {
        switch (city) {
            case "Sofia": salary = (sale * 8) / 100; console.log(salary.toFixed(2)); break;
            case "Varna": salary = (sale * 10) / 100; console.log(salary.toFixed(2)); break;
            case "Plovdiv": salary = (sale * 12) / 100; console.log(salary.toFixed(2)); break;
            default:
                console.log("error"); break;
        }
    } else if (sale > 10000) {
        switch (city) {
            case "Sofia": salary = (sale * 12) / 100; console.log(salary.toFixed(2)); break;
            case "Varna": salary = (sale * 13) / 100; console.log(salary.toFixed(2)); break;
            case "Plovdiv": salary = (sale * 14.5) / 100; console.log(salary.toFixed(2)); break;
            default:
                console.log("error"); break;
        }
    } else {
        console.log("error");
    }

}