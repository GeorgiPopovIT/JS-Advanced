function solve(n,m){
        let sum = 0;
        let number1 = Number(n);
        let number2 = Number(m);

        for (let i = number1; i <= number2; i++) {
            
            sum += i;
            
        }

       return sum;
}

console.log(solve('1','5'));