function extract(content) {
    const element = document.getElementById(content).textContent;

        const pattern = /\((.+?)\)/g;

        let match = pattern.exec(element);

        let result = '';

       while(match != null){
        result += match[1] +' ;'

        match = pattern.exec(element);
       }
       return result;
}