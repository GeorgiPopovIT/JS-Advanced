function addItem() {
        let elements = document.getElementById('items');
        let link = document.createElement('a');

        link.textContent = '[Delete]';
        link.href = '#';

        const input = document.getElementById('newItemText').value;

        let itemToAdd = document.createElement('li');

        link.addEventListener('click',onDelete);

        function onDelete(){
                itemToAdd.remove();
        }

        itemToAdd.textContent = input;
        itemToAdd.appendChild(link)

        elements.appendChild(itemToAdd);


        document.getElementById('newItemText').value = '';
}