function deleteByEmail() {

        let isDeleted = false;

    const elements = document.getElementsByTagName('tbody')[0].rows;

    const input = document.querySelector('input').value;


    for (let i = 0; i < elements.length; i++) {

        let email = elements[i].children[1].textContent;

        if (input == email) {
            elements[i].parentNode.removeChild(elements[i]);
            isDeleted = true;
            continue;
        }
    }

    isDeleted == true ? document.getElementById('result').textContent = 'Deleted'
                        : document.getElementById('result').textContent = 'Not found.'

    document.querySelector('input').value = '';
}