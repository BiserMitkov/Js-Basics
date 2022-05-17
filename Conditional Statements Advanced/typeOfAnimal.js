function animalType(input) {

    let kind = input[0]

    switch (kind) {

        case "dog":
            console.log("mammal"); break;
        case "crocodile":

        case "snake":

        case "tortoise":
            console.log("reptile"); break;
        default:
            console.log("unknown"); break;
    }
}