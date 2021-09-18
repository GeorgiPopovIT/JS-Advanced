function solve(input){
    let odds = [];

   for (let i = 1; i < input.length; i+=2) {
      odds.unshift(input[i] * 2);
       
   }

    return odds.join(' ');
}
console.log(solve([10,15,20,25]));
console.log(solve([3,0,10,4,7,3]));