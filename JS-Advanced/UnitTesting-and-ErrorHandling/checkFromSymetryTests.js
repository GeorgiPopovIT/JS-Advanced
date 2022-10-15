const {expect, assert} = require('chai');
const {isSymmetric}  = require('./5.CheckFromSymetry');

describe('Is Symetric', () =>  {
    it('check is symetric - true',function() {
        expect(isSymmetric([1,2,2,1])).to.be.equal(true);
    });
    it('check is symetric - true',function() {
        expect(isSymmetric([1,2,2,1])).to.be.equal(true);
    });
    it('check one number',function() {
        assert.equal(isSymmetric([2]),true)
        //expect(isSymmetric([1])).to.be.equal(true);
    });
    it('check invalid input',function() {
        expect(isSymmetric('ddsa')).to.be.equal(false);
    });
    it("should return false for [-1,2,1]", function () {
        expect(isSymmetric([-1,2,1])).to.be.equal(false);
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });
    
});