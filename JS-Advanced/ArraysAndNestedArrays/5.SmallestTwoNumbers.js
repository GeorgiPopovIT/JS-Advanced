function twoSmallestNums(input){

    let res = input.sort((a,b) => a - b).slice(0, 2);
    
    return res.join(" ");
}

console.log(twoSmallestNums([30, 15, 50, 5]));
console.log(twoSmallestNums([3, 0, 10, 4, 7, 3]));