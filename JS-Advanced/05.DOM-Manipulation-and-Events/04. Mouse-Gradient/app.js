function attachGradientEvents() {
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove',mouseMove);
    gradient.addEventListener('mouseout',mouseOut);


    function mouseMove(event){
        let power = event.offsetX / (event.target.clientWidth - 1);

        power = Math.trunc(power * 100);
        
        document.getElementById('result').textContent = power + "%";
    }


    function mouseOut(event){
        document.getElementById('result').textContent = "";
    }
}