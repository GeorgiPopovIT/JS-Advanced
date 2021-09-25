function rotate(input,counter){

        for (let i = 0; i < counter; i++) {
           
            input.unshift(input.pop());
        }

        return input.join(' ');
}

console.log(rotate(['1', 
'2', 
'3', 
'4'], 
2
));
console.log(rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
));