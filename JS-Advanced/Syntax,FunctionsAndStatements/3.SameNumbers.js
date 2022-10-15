function sameNumbers(input){

        let isSame = true;
        let sum = 0;
        let first = input % 10;

        while (input) {
            if (input % 10 !== first) {
                isSame = false;
            }
            sum += input % 10;
            input = Math.floor(input / 10);

          
        }
        
        console.log(isSame);
        console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);