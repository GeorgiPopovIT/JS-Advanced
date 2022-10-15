function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {

      const input = document.getElementsByTagName('textarea')[0].value;

         let array = [input];
         console.log(array.split(','));
   }
}