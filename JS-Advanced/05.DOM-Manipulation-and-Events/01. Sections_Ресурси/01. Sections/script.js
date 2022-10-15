function create(words) {
  
   const content = document.getElementById('content');

   for (let word of words) {
      let section = document.createElement('div');

      let sectionName = document.createElement('p');
      sectionName.textContent = word; 
      sectionName.style.display = 'none';

      section.addEventListener('click',onClick);

      section.appendChild(sectionName);
      
      content.appendChild(section);
   }

   function onClick(ev){
      let headerSection = ev.target.querySelector('p');
      headerSection.style.display = 'block';
   }
}