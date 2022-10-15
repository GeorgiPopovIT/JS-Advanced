function carFactory(car){

    const carInFactory = {};
    carInFactory.model = car.model;
    
    
    if (car.power <= 90) {

        car.power = 90;
        car.volume = 1800;
    }
    else if (car.power <= 120 ) {
        car.power = 120;
        car.volume = 2400;
    }
    else if (car.power <= 200) {
        car.power = 200;
        car.volume = 3500;
    }

    const engine = {
        power:car.power,
        volume: car.volume
    };

    carInFactory.engine = engine;

    const carriage = {
        type:car.carriage,
        color : car.color
    };

    carInFactory.carriage = carriage;

    const wheels = [];
    if (car.wheelsize % 2 == 0) {
        car.wheelsize -=1;
    }
    for (let i = 0; i < 4; i++) {
       
      
        wheels[i] = car.wheelsize;
        
    }

    carInFactory.wheels = wheels;


    return carInFactory;

}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));

console.log();