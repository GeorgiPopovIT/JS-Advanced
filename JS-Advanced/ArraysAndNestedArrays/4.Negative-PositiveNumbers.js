function solve(input){

        const result = [];

        for (let i = 0; i < input.length; i++) {
           if (input[i] < 0) {
               result.unshift(input[i]);
               continue;
           }
           result.push(input[i]);
            
        }

        return result.forEach(element => console.log(element));
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));