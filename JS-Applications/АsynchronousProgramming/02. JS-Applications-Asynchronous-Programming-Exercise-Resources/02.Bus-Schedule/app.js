 function solve() {
    const arriveButton = document.getElementById('arrive');
    const departButton = document.getElementById('depart');

    const stopInfo = document.querySelector('#info span');

    let stop = {
        next : 'depot'
    };
     
    async function depart() {

        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;  
        
        const res = await fetch(url);

       stop = await res.json();
        stopInfo.textContent = `Next stop ${stop.name}`;

        departButton.disabled = true;
        arriveButton.disabled = false;


    }

   async function arrive() {

        stopInfo.textContent =  `Arriving at ${stop.name}`;


        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();