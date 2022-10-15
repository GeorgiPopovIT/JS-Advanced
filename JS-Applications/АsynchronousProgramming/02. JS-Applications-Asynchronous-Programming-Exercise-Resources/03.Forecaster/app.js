function attachEvents() {

    const submitBtn = document.getElementById('submit').addEventListener('click',submit);

    async function submit(event){
        const url =  `http://localhost:3030/jsonstore/forecaster/locations`;

        const res = await fetch(url);

        const data = await res.json();

        console.log(data);
    }
}

attachEvents();