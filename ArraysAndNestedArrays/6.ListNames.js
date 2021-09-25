function listNames(input){

        let i = 0;
        return input.sort().forEach(element => {
            
            console.log(`${++i}.${element}`);
        });
}

listNames(["John", "Bob", "Christina", "Ema"]);