function wordsUpperCase(input){

       let inputToUpper = input.toUpperCase()
       .split(/[\W]+/)
       .filter(String);

       
    
       return inputToUpper.join(', ');
}

console.log(wordsUpperCase('Hi, how are you?'));
console.log(wordsUpperCase('hello'));
console.log(wordsUpperCase('Functions in JS can be nested, i.e. hold other functions'));