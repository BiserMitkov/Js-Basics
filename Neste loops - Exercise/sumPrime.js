function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];
    index++;

    let sumOfNonPrimeNumbers = 0;
    let sumOfPrimeNumbers = 0;

    while (command !== "stop") {

        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        if (currentNum === 1) {
            sumOfPrimeNumbers += currentNum;
            command = input[index];
            index++;
            
        }
        let isPrime = true;

        for (let i = 2; i < currentNum; i++) {
            if (currentNum % i === 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            sumOfPrimeNumbers += currentNum;
        } else {
            sumOfNonPrimeNumbers += currentNum;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumOfPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrimeNumbers}`);
}