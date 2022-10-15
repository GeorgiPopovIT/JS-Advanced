function tickets(cities,sortingTerm){
class Ticket{
    constructor(destination,price,status){
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

}

    const destinations = [];

    for (let i = 0; i < cities.length; i++) {

        const currCity = cities[i].split('|');
        let currTicket = new Ticket(currCity[0],Number(currCity[1]),currCity[2]);

        destinations.push(currTicket);
        
    }

    let sorted;

    if(sortingTerm == 'destination'){
        sorted = destinations.sort((a,b) => a.destination.localeCompare(b.destination));
    }
    else if(sortingTerm == 'status'){
        sorted = destinations.sort((a,b) => a.status.localeCompare(b.status));
    }
    else{
        sorted = destinations.sort((a,b) => a.price - b.price);
    }

    return sorted;

}
console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));
