function previousDate(year,month,day){

    let date = new Date(year,month - 1,day - 1);
    date.setDate(date.getDate());
   
    
   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

console.log(previousDate(2016, 9, 30));
console.log(previousDate(2016,10,1));