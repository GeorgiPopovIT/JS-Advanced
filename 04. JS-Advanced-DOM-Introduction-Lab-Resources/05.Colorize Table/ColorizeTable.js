function colorize() {
    const rows = document.getElementsByTagName('table')[0].rows;

    for(let i = 1; i < rows.length;i+=2)
    {
        rows[i].style.background = 'Teal';
    }
}