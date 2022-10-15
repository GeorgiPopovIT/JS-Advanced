function solve(input){

    let inputType = typeof(input);

    if (inputType !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
    else{
        let result = Math.PI * Math.pow(input,2);
        console.log(result.toFixed(2));
    }
}

solve(5)
solve('5')
solve('name')