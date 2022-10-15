function search() {
      let towns = document.getElementById('towns')
      .getElementsByTagName('li');

      const substring = document.getElementById('searchText').value;

         let result = 0;

      for (let i = 0; i < towns.length; i++) {
         
            if(towns[i].textContent.includes(substring)){

               towns[i].style.textDecoration = 'underline';
               towns[i].style.fontWeight = 'bold';

               result++;
            }
      }
    document.getElementById('result').textContent = `${result} matches found`;
}
