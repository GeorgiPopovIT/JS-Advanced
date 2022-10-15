function solve(input){

        let array = [];
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] > input[i + 1] || input[i + 1] != null) {
            array.push(input[i])
        }
        
    }
}

console.log(solve([1,3,8,4,10,12,3,2,24]));
console.log(solve([1,2,3,4]));
console.log(solve([20,3,2,15,6,1]));