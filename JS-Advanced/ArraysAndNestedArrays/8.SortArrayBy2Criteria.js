function sortArrayByTwoCriteria(input){

        return input
        .sort((a,b) => {
            if (a.length === b.length) {
                return a.localeCompare(b);
            }
            return a.length - b.length;
        })
        .join('\n');
}

console.log(sortArrayByTwoCriteria(['alpha','beta','gamma']));
console.log(sortArrayByTwoCriteria(['Isacc','Theodor','Jack','Harrison','George']));
console.log(sortArrayByTwoCriteria(['test','Deny','omen','Default']));