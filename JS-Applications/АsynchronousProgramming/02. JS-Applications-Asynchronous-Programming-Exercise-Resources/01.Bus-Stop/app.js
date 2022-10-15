async function getInfo() {

    const stopId = document.getElementById('stopId').value
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const timeTableEl = document.getElementById('buses');

    const stopNameElement = document.getElementById('stopName');

    try {
        timeTableEl.innerHTML = '';

        const res = await fetch(url);
        if(res.status != 200){
            throw new Error('StopId not found!');
        }
        const data = await res.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;

            timeTableEl.appendChild(liElement);
        });

    console.log(data);
    } catch (error) {
        stopNameElement.textContent = 'Error';

       // timeTableEl.innerHTML = '';

    }
    
}