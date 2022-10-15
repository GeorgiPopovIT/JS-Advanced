function  elements(commands){

        let array = [];

        for (let i = 0; i < commands.length; i++) {
            
            if (commands[i] === 'add') {
                array.push(i + 1);
            }
            else if(commands[i] === 'remove'){
                array.pop();
            }


        }

        return array.length > 0
         ? array.join('\n')
        : 'Empty';
}

console.log(elements(['add', 
'add', 
'add', 
'add']
));
console.log('-----');
console.log(elements(['add', 
'add', 
'remove', 
'add', 
'add']
));
console.log('----');
console.log(elements(['remove', 
'remove', 
'remove']
));