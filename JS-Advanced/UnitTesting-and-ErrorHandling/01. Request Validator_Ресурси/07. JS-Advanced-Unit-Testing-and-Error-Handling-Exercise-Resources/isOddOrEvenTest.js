const {expect} = require('chai');
const isOddOrEven  = require('./isOddOrEven');

describe('Is odd or even',() => {

        it('even number ',function(){
            expect(isOddOrEven('3234')).to.be.equal('even');
        });
        it('odd number', function (){
            expect(isOddOrEven('3d234')).to.be.equal('odd');
        });
        it('input is not string - undefined', function (){
            expect(isOddOrEven(543)).to.be.equal(undefined);
        });
        it('multiple string', function (){
            expect(isOddOrEven('3d234 dasdsd')).to.be.equal('even');
        });
});

