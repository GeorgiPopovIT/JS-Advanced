function solve(numbers){
   
    let sum = 0;
    let inverseSum = 0; 

    for (let i = 0; i < numbers.length; i++) {
        sum+=numbers[i];
        
    }

    for (let i = 0; i < numbers.length; i++) {
        inverseSum+= 1 / numbers[i];
        
    }
    
    console.log(sum);
    console.log(inverseSum);
    console.log(numbers.join(''))
}


solve([1, 2, 3]);
solve([2, 4, 8, 16]);