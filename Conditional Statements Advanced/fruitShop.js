function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let finalSum = 0;

    if (day === "Sunday" || day === "Saturday") {
        switch (fruit) {
            case "banana":
                finalSum = quantity * 2.70; console.log(finalSum.toFixed(2)); break;
            case "apple":
                finalSum = quantity * 1.25; console.log(finalSum.toFixed(2)); break;
            case "orange":
                finalSum = quantity * 0.90; console.log(finalSum.toFixed(2)); break;
            case "grapefruit":
                finalSum = quantity * 1.60; console.log(finalSum.toFixed(2)); break;
            case "kiwi":
                finalSum = quantity * 3.00; console.log(finalSum.toFixed(2)); break;
            case "pineapple":
                finalSum = quantity * 5.60; console.log(finalSum.toFixed(2)); break;
            case "grapes":
                finalSum = quantity * 4.20; console.log(finalSum.toFixed(2)); break;
                default:
                    console.log("error");break;

        }
    } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday")
        switch (fruit) {
            case "banana":
                finalSum = quantity * 2.50; console.log(finalSum.toFixed(2)); break;
            case "apple":
                finalSum = quantity * 1.20; console.log(finalSum.toFixed(2)); break;
            case "orange":
                finalSum = quantity * 0.85; console.log(finalSum.toFixed(2)); break;
            case "grapefruit":
                finalSum = quantity * 1.45; console.log(finalSum.toFixed(2)); break;
            case "kiwi":
                finalSum = quantity * 2.70; console.log(finalSum.toFixed(2)); break;
            case "pineapple":
                finalSum = quantity * 5.50; console.log(finalSum.toFixed(2)); break;
            case "grapes":
                finalSum = quantity * 3.85; console.log(finalSum.toFixed(2)); break;
                default:
                    console.log("error");break;

        } else if (day === "Thursday" || day === "Friday") {
            switch (fruit) {
                case "banana":
                    finalSum = quantity * 2.50; console.log(finalSum.toFixed(2)); break;
                case "apple":
                    finalSum = quantity * 1.20; console.log(finalSum.toFixed(2)); break;
                case "orange":
                    finalSum = quantity * 0.85; console.log(finalSum.toFixed(2)); break;
                case "grapefruit":
                    finalSum = quantity * 1.45; console.log(finalSum.toFixed(2)); break;
                case "kiwi":
                    finalSum = quantity * 2.70; console.log(finalSum.toFixed(2)); break;
                case "pineapple":
                    finalSum = quantity * 5.50; console.log(finalSum.toFixed(2)); break;
                case "grapes":
                    finalSum = quantity * 3.85; console.log(finalSum.toFixed(2)); break;
                    default:
                        console.log("error");break;
            }
        } else {
            console.log("error")


    
    }
    
}