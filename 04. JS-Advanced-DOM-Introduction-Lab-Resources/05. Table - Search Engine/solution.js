function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let inputText = document.getElementById('searchField').value.toLocaleLowerCase();

      let tableElements = Array.from(document.querySelectorAll('tbody tr'));

      tableElements.forEach((el) => {
         let text = el.textContent.toLowerCase();

         if (text.includes(inputText)) {
            el.classList.add('select');
         }
         else{
            el.classList.remove('select');
         }
      })

         inputText.value = '';

   }
}