function sequence(n,k){
    let array = [];
    array[0] = 1;
    

    for (let i = 1; i <n; i++) {

        let nextElement = array.slice(i - k <= 0 ? 0 : i - k,i);

        const reducer = (accumulator, curr) => accumulator + curr;

        array[i] = nextElement.reduce(reducer);
      
        
    }

    return array;
}
console.log(sequence(6,3).join(', '));

console.log(sequence(8,2).join(', '));