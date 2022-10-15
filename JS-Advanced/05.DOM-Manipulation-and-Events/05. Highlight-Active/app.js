function focused() {
    let sections = Array.from(document.getElementsByTagName('input'));

    for (let i = 0; i < sections.length; i++) {
        sections[i].addEventListener('focus',оnFocus);
        sections[i].addEventListener('blur',onBlur);
        
    }

    function оnFocus(ev){
         ev.target.parentNode.className = 'focused'
    }
    function onBlur(ev){
        ev.target.parentNode.className = 'blur'

    }

}