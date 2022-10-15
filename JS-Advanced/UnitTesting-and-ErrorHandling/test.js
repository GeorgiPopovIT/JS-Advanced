const {expect,assert} = require('chai');
const {sum} = require('./4.SumOfNumbers');

describe('Sum tests', () =>  {
    it("should return 3 for [1,2]", function () {
        expect(sum([1,2])).to.be.equal(3);
    });
    it('should return NaN', function() {
        expect(sum(['d'])).to.be.NaN;
    })
    it("should return 3 for [1.5, 2.5, -1]", function () {
        expect(sum([1.5, 2.5, -1])).to.be.equal(3);
    });
});

