function generateReport() {

    const checkedBoxes = document.querySelectorAll('input');

    const allRows = document.querySelectorAll('tbody tr');

    let result = [];

    for (let i = 0; i < allRows.length; i++) {
        
        let obj = {};
        for (let j = 0; j < checkedBoxes.length; j++) {
            
            if (checkedBoxes[j].checked) {

                obj[checkedBoxes[j].name] = allRows[i].children[j].textContent;
            }
        }

        result.push(obj);
        
    }


    document.getElementById('output').value = JSON.stringify(result);
    

}