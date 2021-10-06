function extractText() {
   
    const elements = document.getElementById('items').querySelectorAll('li');;

    const result = [];

    for(let i = 0;i < elements.length;i++){
        result.push(elements[i].textContent);
    }

    document.getElementById('result').textContent = result.join('\n');
}