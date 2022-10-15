function gcd(num1,num2){
    while(num2) {
        var t = num2;
        num2 = num1 % num2;
        num1 = t;
      }
      return num1;
}

//console.log(gcd(15,5));
console.log(gcd(2154,458));