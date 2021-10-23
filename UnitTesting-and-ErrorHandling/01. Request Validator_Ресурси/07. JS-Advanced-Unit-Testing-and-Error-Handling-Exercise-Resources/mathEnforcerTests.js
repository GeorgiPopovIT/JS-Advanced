const {expect,assert} = require('chai');
const mathEnforcer  = require('./mathEnforcer').mathEnforcer;

describe('Math Enforcer',() => {
    
    describe('Valid tests', () => {
        it('addFive',function(){
         let value =  mathEnforcer.addFive(3);
             assert.equal(value,8);
        });
        it("should return correct result for negative integer parameter", function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it("should return correct result for floating point parameter", function () {
           expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
       });
        it('subtractTen',function(){
            let value =  mathEnforcer.subtractTen(20);
                assert.equal(value,10);
         });
         it('sum', function() {
            let value = mathEnforcer.sum(4,5);
            assert.equal(value,9);
         });
         it("should return undefined for non-number parameter",function () {
            expect(mathEnforcer.subtractTen("5")).to.be.equal(undefined);
        });
         it('addFive with floating-point numbers', function() {
            expect(mathEnforcer.addFive(2.7)).to.be.closeTo(7.7, 0.01);
         });
         it('subtractTen with floating-point numbers', function() {
            expect(mathEnforcer.subtractTen(2.5)).to.be.closeTo(-7.5, 0.01);
         });
         it('sum with floating-point numbers', function() {
            expect(mathEnforcer.sum(2.7, 3.4)).to.be.closeTo(6.1, 0.01);
         });
         it('sum negative numbers', function(){
             expect(mathEnforcer.sum(-3,-2)).to.be.equal(-5);
         });
         it("should return correct result for integer parameters", function () {
            expect(mathEnforcer.sum(5, -3)).to.be.equal(2);
        });
    });
    describe('Invalid tests', () => {
        it('addFive parameter i sn ot a number',function(){
            let value =  mathEnforcer.addFive('dds');
                assert.equal(value,undefined);
           });
           it("should return undefined for non-number first parameter", function () {
            expect(mathEnforcer.sum("5", 5)).to.be.equal(undefined);
        });
        it("should return undefined for non-number second parameter", function () {
            expect(mathEnforcer.sum(5, "5")).to.be.equal(undefined);
        });
        it('subtractTen',function(){
            let value =  mathEnforcer.subtractTen('233');
                assert.equal(value,undefined);
         });
         it('sum when num1 is string', function() {
            let value = mathEnforcer.sum('dsd',5);
            assert.equal(value,undefined);
         });
         it('sum when num2 is string', function() {
            let value = mathEnforcer.sum(4,'wew');
            assert.equal(value,undefined);
         });
    });
});