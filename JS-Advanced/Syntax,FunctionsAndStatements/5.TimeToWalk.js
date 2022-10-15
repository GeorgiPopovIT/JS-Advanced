function calculate(steps,footPrint,speed){

        let distanceInMeters = steps * footPrint; 

        let speedInMeters = speed / 3.6;

        let t = distanceInMeters / speedInMeters;

        let breaks = Math.floor(distanceInMeters / 500);

        t+=breaks * 60;

        let hour = Math.floor(t / 60 / 60);
        let minutes = Math.floor(t / 60)
        let seconds = Math.ceil(t - minutes * 60);
        

        return `${hour < 10 ? "0" : ""}${hour}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

}

console.log(calculate(4000,0.60,5));
console.log(calculate(2564,0.70,5.5));