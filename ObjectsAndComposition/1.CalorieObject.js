function calorie(products){

        let result =  {};

       for (let i = 0; i < products.length; i+=2) {

           let productName = products[i];
           let productCalorie = Number(products[i + 1]);

           result[productName] =  productCalorie;
       }


       return result;
}

console.log(calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calorie(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));