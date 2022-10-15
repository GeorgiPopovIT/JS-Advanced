function inventory(heroes){

   
   const result = [];

    for (let i = 0; i < heroes.length; i++) {

        let[name,level,items] = heroes[i].split(' / ');
        let level = Number(level);
        let items =items.split(', ');

        result.push({name,level,items});
        
    }

    return JSON.stringify(result);

}
console.log(inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));

console.log(inventory(['Jake / 1000 / Gauss, HolidayGrenade']));