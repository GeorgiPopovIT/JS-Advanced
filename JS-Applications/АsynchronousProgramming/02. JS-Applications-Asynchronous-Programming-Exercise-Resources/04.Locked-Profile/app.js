async function lockedProfile() {

    const url  = 'http://localhost:3030/jsonstore/advanced/profiles';
    const res = await fetch(url);

    const data = await res.json();


    const profiles = document.querySelectorAll('.profile button').forEach(element => {
        element.addEventListener('click',showOrHide);
    });
    console.log(profiles);
    
    function showOrHide(e){
        let lockButton = e.target.parentNode.getElementsByTagName('input')[0];

        const button = e.target;

        if(!lockButton.checked &&  button.textContent == 'Show more')
        {
            button.parentNode.getElementsByTagName('div')[0].style.display = 'inline-block';

            button.textContent = 'Hide it';


        }
        else if(!lockButton.checked &&  button.textContent == 'Hide it'){
            button.parentNode.getElementsByTagName('div')[0].style.display = 'none';

            button.textContent = 'Show more';
        }
    }
}