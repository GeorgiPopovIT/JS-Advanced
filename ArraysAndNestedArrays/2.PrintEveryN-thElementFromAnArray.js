function solve(array,n){

        let collection = []
        for (let i = 0; i < array.length; i+=n) {
            collection.push(array[i]);
            
        }

        return collection;
}
console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));
console.log(solve());
console.log(solve());