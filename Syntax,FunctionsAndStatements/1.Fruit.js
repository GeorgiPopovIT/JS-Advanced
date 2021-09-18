function solve(fruit,weight,pricePerKilo){

    
    let money = (weight * pricePerKilo) / 1000;
    let weigthInKilo = weight / 1000;

    return `I need $${money.toFixed(2)} to buy ${weigthInKilo.toFixed(2)} kilograms ${fruit}.`;
}

console.log(solve('orange', 2500, 1.80));
console.log(solve('apple', 1563, 2.35));