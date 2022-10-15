function sortingNumbers(input){
    let array = [];

    let smallest =  input.sort((a,b) => a - b);

    //let biggest = input.sort((a,b) => b -a);

    for (let i = 0; i < input.length / 2; i++) {
        array[i + i] = smallest[i];
        array[i + i + 1] = smallest[smallest.length - i - 1];
    }

    return array;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));