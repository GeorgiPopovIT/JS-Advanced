function addItem() {
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');


        let selectList = document.getElementById('menu');

        let input = document.createElement('option');
        input.textContent = inputText.value;
        input.value = inputValue.value;


        selectList.appendChild(input);

        inputText.value = '';
        inputValue.value = '';


    
}