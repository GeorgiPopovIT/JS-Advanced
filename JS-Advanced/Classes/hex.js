    class Hex{
        constructor(value){
            this.value = Number(value);
        }

        valueOf(){
            return this.value;

        }
        toString(){
            return `0x${(this.value.toString(16)).toUpperCase()}`;
        }
        plus(number){
        let num = this.value + number;
            return new Hex(num);

        }
        minus(number){
        let num = this.value - number;
            return new Hex(num);
        }
        parse(text){
            return parseInt(text, 16);
        }

    }

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
