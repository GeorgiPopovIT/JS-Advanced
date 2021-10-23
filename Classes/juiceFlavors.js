function juiceFlavors(fruits){

    const result = {};
    const fruits = {};


    for (let i = 0; i < fruits.length; i++) {
        const currFuit = fruits[i].split(' => ');
        const fruitName = currFuit[0];
        const fruitQuantity = Number(currFuit[1]);

        if(result[fruitName] == undefined){
            result[fruitName] = 0;
        }


        result[fruitName]+= fruitQuantity;
        if(fruits[fruitName] == undefined){
            
        }
    }

        
    for (const fruit in result) {
        if (result[fruit] >= 1000) {
            console.log(`${fruit} => ${(result[fruit] / 1000).toFixed(0)}`);
        
        }
    }
 
}


juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
);
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);