String.prototype.ensureStart = function(str){
    let result = this;
    if(str != this.substring(0, str.length)){
        let newString = str + this;
        result = newString;
    }
    return result;
};

String.prototype.ensureEnd = function(str){
    if(str != this.substring(this.length - str.length,str.length)){
        //let newString = str + this;
        //this = newString;
    }
    return this;
};

String.prototype.truncate = function(n){

};

String.prototype.isEmpty = function(){
    if(!this){
        return false;
    }
    return true;
};

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
// str = str.truncate(16);
// str = str.truncate(14);
// str = str.truncate(8);
// str = str.truncate(4);
// str = str.truncate(2);
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// str = String.format('jumps {0} {1}',
//   'dog');