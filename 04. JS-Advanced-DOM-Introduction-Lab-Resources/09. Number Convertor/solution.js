function solve() {

    const input = document.getElementById('input');
   const selectMenu = document.getElementById('selectMenuTo');

    selectMenu.innerHTML = ' <option selected value="binary">Binary</option>  <option selected value="hexadecimal">Hexadecimal</option>'
   
    document.querySelector('button').addEventListener('click',onClick);

     function onClick () {

         let result = 0;
         let number = Number(input.value);

        if (selectMenu.value == 'binary') {
            result = (number >>> 0).toString(2);
        }
        else if (selectMenu.value == 'hexadecimal') {
            result  = number.toString(16).toUpperCase();
        }
        document.getElementById('result').value =  result;
    };
}