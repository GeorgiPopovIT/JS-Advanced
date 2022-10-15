const {expect} = require('chai');
const lookupChar = require('./charLookup');

describe('char lookup',() => {
    it('string isn ot string return undefinded',function(){
        expect(lookupChar(4,5)).to.be.equals(undefined);
    });
    it('string isn ot string return undefinded',function(){
        expect(lookupChar('dsadsdsd','asd')).to.be.equals(undefined);
    });
    it('string length is smaller than index return Incorect index ',function(){
        expect(lookupChar('dsd',6)).to.be.equals('Incorrect index');
    });
    it('index is smaller than zero return Incorect index ',function(){
        expect(lookupChar('dsd',-5)).to.be.equals('Incorrect index');
    });
    it('correct variant ',function(){
        expect(lookupChar('hello',4)).to.be.equals('o');
    });
    it('only string parameter return indefined ',function(){
        expect(lookupChar('dsd')).to.be.equals(undefined);
    });
    it('only invalid string parameter return indefined ',function(){
        expect(lookupChar(4)).to.be.equals(undefined);
    });
    it('input string is whitespace ',function(){
        expect(lookupChar('  ',0)).to.be.equals(' ');
    });
    it('incorrect index with paramaeter double ',function(){
        expect(lookupChar('fewfwfwef',3.12)).to.be.equals(undefined);
    });
});