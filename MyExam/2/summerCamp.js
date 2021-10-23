class SummerCamp{
    constructor(organizer,location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }
    registerParticipant (name, condition, money){
        if(!(condition in this.priceForTheCamp)){
            throw new Error('Unsuccessful registration at the camp.');
        }
        if(this.listOfParticipants.find(m => m.name == name)){
            return `The ${name} is already registered at the camp.`;
        }

        if(money < this.priceForTheCamp[condition]){
            return `The money is not enough to pay the stay at the camp.`;
        }

        const participant = {
            name : name,
            condition : condition,
            power : 100,
            wins : 0
        };

        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant (name){

        if(!this.listOfParticipants.find(m => m.name == name)){
            throw new Error(`The ${name} is not registered in the camp.`);
        }

       const el =  this.listOfParticipants.find(m => m.name == name);
       let index = this.listOfParticipants.indexOf(el);

        this.listOfParticipants.splice(index)
        
        return `The ${name} removed successfully.`;
    }
    timeToPlay (typeOfGame, participant1, participant2){
        let player1 = this.listOfParticipants.find(p => p.name == participant1);

        if(!this.listOfParticipants.includes(player1)){
            throw new Error('Invalid entered name/s.');
        }

        let player2 = this.listOfParticipants.find(p => p.name == participant2);

        if(!this.listOfParticipants.includes(player2) && typeOfGame == 'WaterBalloonFights'){
            throw new Error('Invalid entered name/s.');
        }


        if(player1.condition != player2.condition){
            throw new Error('Choose players with equal condition.');
        }

        
        if(typeOfGame == 'Battleship'){

            player1.power += 20;

            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
        else if (typeOfGame == 'WaterBalloonFights') {

            if(player1.power > player2.power){
                player1.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`

            }
            else if(player2.power > player1.power){
                player2.wins++;

                return `The ${participant2} is winner in the game ${typeOfGame}.`
            }
            else{
                return `There is no winner.` ;
            }
        }

    }
    toString(){
        let result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        for (const participant in this.listOfParticipants) {
            result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`)
        }

        return result.join('\n');
    }

}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");

console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
//console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
//console.log(summerCamp.unregisterParticipant("Petar"));
console.log(summerCamp.unregisterParticipant("Petar Petarson"));

console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());