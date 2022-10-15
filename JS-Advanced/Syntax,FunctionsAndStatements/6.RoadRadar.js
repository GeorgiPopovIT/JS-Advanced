function roadRadar(speed,area){
        let speedLimit = 0;
        let status = '';

    switch (area) {
        case 'city':
            speedLimit = 50;
                break;
            case 'interstate':
                speedLimit = 90;
                    break;
        case 'residential':
             speedLimit = 20;
                 break;
        case 'motorway':
            speedLimit = 130;
                break;
        default:
            break;
    }
   
    if (speed <= speedLimit) {
        return `Driving ${speed} km/h in a ${speedLimit} zone`;
    }
   
    const difference = speed - speedLimit;

    if (difference <= 20) {
        status = 'speeding'
    }
    else if (difference <= 40) {
        status = 'excessive speeding';
    }
    else{
        status = 'reckless driving';
    }

    return `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
            
}
console.log(roadRadar(40,'city'));
console.log(roadRadar(21,'residential'));
console.log(roadRadar(120,'interstate'));
console.log(roadRadar(200,'motorway'));