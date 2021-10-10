function toggle() {
        let section = document.getElementsByClassName('button')[0];

    const content = document.getElementById('extra');
    
   if(section.textContent == 'More'){

        document.getElementsByClassName('button')[0].textContent = 'Less';

       content.style.display = 'block';
   }
   else if(section.textContent == 'Less'){
 document.getElementsByClassName('button')[0].textContent = 'More';

       content.style.display = 'none';
   }

}