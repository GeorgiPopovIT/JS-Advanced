function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change',onChange);

    function onChange(ev){

        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

        if (pattern.test(ev.target.value)) {
            
            ev.target.classList.remove('error');    
        }
        else{
            ev.target.classList.add('error');
        }

    }

}