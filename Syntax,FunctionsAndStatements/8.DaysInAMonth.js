function days(numberOfMonth,year){

    return new Date(year,numberOfMonth,0).getDate();

}

console.log(days(1, 2012));
console.log(days(2, 2021));
console.log(days(9,2012));