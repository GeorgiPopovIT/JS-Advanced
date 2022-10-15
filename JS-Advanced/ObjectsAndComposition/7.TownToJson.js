function townsToJson(input){

   // let tokens = input.split(' | ')
   const result = [];

    for (let i = 1; i < input.length; i++) {

        const row = input[i].split('|').filter(function(str) {
            return /\S/.test(str);
        });
        
          let Town = row[0].trim();
          
          let Latitude = Math.round(Number(row[1].trim()) * 100) / 100;
         
          let Longitude = Math.round(Number(row[2].trim()) * 100) / 100;

        result[i - 1] = {Town,Latitude,Longitude};

    }

    return JSON.stringify(result);
}

console.log(townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
));

console.log(townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
));