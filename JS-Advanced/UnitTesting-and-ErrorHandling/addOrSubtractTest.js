const {expect,assert} = require('chai');
const createCalculator = require('./addOrSubtract');

describe('createCalculator', () => {
    let obj;

    beforeEach(function() {
         obj = createCalculator();
    });

    describe('Normal valid tests', () => {
        it('return valid add',function(){
            obj.add(3) 
            let value = obj.get();
            assert.equal(value,3)
        });
        it('return valid subtract',function(){
            obj.add(6);
            obj.subtract(4);
            let value = obj.get();
            assert.equal(value,2);
        });
        it('retun 0 - get',function(){
            let value = obj.get();
            assert.equal(value,0);
        })
    });

    describe('Invalid tests', () => {
        it('return NaN - add',function(){
            obj.add('dadssa');
            //obj.subtract('3');
            let value = obj.get();

            expect(value).to.be.NaN;
        });
        it('return NaN - subtract',function(){
            obj.subtract('sdadsad');
            let value = obj.get();

            expect(value).to.be.NaN;
        })
    });
});