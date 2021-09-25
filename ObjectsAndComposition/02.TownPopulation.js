function townPopulation(towns){

        const result = {};

        for (const key of towns) {

             let tokens = key.split(' <-> ');
            const city = tokens[0];
            const population = Number(tokens[1]);

                if (!result[city]) {

            result[city] = population;
            
            }
            else{
                result[city] += population;
            }
            
        }


        for (const town in result) {
            console.log(`${town} : ${result[town]}`);
        }
    
       
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);