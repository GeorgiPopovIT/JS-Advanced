function diagonalSum(array){
    let firstIndex = 0;
    let secondIndex = array.length - 1;
    let firstDiagonal = 0;
    let secondDiagonal = 0;

   for (const number of array) {
       firstDiagonal+= number[firstIndex];
        secondDiagonal+=number[secondIndex];

       secondIndex--;
       firstIndex++;
   }

    return firstDiagonal + ' ' + secondDiagonal;
}

console.log(diagonalSum([[20, 40],
    [10, 60]]
   ));

   console.log(diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   ));