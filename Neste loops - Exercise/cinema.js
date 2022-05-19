function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    

    let standartCounter = 0;
    let kidCounter = 0;
    let studentCounter = 0;
    let totalTicketCounter = 0;

    while (command !== "Finish") {
        let name = command;
        index++;
        let freeSpace = Number(input[index]);
        index++;

        let ticketType = input[index];
        let ticketCounter = 0;
        while (ticketType !== "End") {
            ticketCounter++;
            switch (ticketType) {

                case "kid": kidCounter++; break;
                case "standard": standartCounter++; break;
                case "student": studentCounter++; break;
            }

            if (ticketCounter >= freeSpace) {
                break;
            }
            index++;
            ticketType = input[index];
            
        }
        totalTicketCounter += ticketCounter;
        let res = ticketCounter / freeSpace * 100;
        console.log(`${name} - ${res.toFixed(2)}% full.`);
        index++;
        command = input[index];
    }
    let standartTickets = standartCounter / totalTicketCounter * 100;
    let studentTickets = studentCounter / totalTicketCounter * 100;
    let kidTickets = kidCounter / totalTicketCounter * 100;
    console.log(`Total tickets: ${totalTicketCounter}`);
    console.log(`${studentTickets.toFixed(2)}% student tickets.`);
    console.log(`${standartTickets.toFixed(2)}% standard tickets.`);
    console.log(`${kidTickets.toFixed(2)}% kids tickets.`);
}