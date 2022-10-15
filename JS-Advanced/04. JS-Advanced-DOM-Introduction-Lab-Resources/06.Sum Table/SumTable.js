function sumTable() {
    const column = document
        .querySelectorAll('table tbody tr td:nth-child(2)');

        let sum = 0;

        for(let i = 0; i < column.length - 1;i++){
            sum +=Number(column[i].textContent);
        }
        
        document.getElementById('sum').textContent = sum;

}