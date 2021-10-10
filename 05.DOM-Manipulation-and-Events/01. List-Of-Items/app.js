function addItem() {
        let elements = document.getElementById('items');

        const input = document.getElementById('newItemText').value;

        let itemToAdd = document.createElement('li');

        itemToAdd.textContent = input;

        elements.appendChild(itemToAdd);


        document.getElementById('newItemText').value = '';
    
}