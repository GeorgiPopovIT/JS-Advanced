function evenPositionNumber(input){

    let numbers = '';
        for (let i = 0; i < input.length; i+=2) {
            
            numbers+=input[i] + ' ';
        }
        return numbers;
}

console.log(evenPositionNumber(['20', '30', '40', '50', '60']));