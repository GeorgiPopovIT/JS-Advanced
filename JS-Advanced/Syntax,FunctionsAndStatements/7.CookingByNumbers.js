function cooking(number,action1,action2,action3,action4,action5){
    
    number = Number(number);
    for (let i = 1; i < arguments.length; i++) {
       
        if (arguments[i] === 'chop') {
            number /= 2;
        }
        else if (arguments[i] === 'dice') {
            number = Math.sqrt(number);
        }
        else if (arguments[i] === 'spice') {
            number+=1;
        }
        else if (arguments[i] === 'bake') {
         number*=3;   
        }
        else if (arguments[i] === 'fillet') {
            number*= 0.80;
        }
        console.log(number);
    }
}

//cooking('32','chop','chop','chop','chop','chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');