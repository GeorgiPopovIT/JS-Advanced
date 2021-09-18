function solve(array,start,end){

    let startString = array.indexOf(start);

    let endString =array.indexOf(end) + 1;

    return array.slice(startString,endString);
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));