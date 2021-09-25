function equalNeighbors(array){
    let counter = 0;
    let index = 0;

  array.forEach(row => {
      let check = [row[index]];
        row.forEach(num => {
           console.log(num);
        
        });
  });
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));
console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));