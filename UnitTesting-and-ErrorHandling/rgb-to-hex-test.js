const{expect,assert} = require('chai');
const rgbToHexColor = require('./rgb-to-hex');


describe('Tests for RgbToHex', () => {

    it('Red is not integer', function() {
        assert.equal(rgbToHexColor('4',6,34),undefined);
    });

    it('Green is not integer', function() {
        assert.equal(rgbToHexColor(54,'6',34),undefined);
    });

    it('Blue is not integer', function() {
        assert.equal(rgbToHexColor(5,6,'34'),undefined);
    });

    it('Red is out of range - too big', function() {
        assert.equal(rgbToHexColor(453,6,34),undefined);
    });

    it('Green is out of range - too big', function() {
        assert.equal(rgbToHexColor(23,2342,34),undefined);
    });

    it('Blue is out of range - too big', function() {
        assert.equal(rgbToHexColor(53,6,543),undefined);
    });

    it('Red is out of range - under zero', function() {
        assert.equal(rgbToHexColor(-3,6,34),undefined);
    });

    it('Green is out of range - under zero', function() {
        assert.equal(rgbToHexColor(43,-5,34),undefined);
    });

    it('Blue is out of range - under zero', function() {
        assert.equal(rgbToHexColor(34,6,-7),undefined);
    });

    it('Retun correct result',function(){
        expect(rgbToHexColor(34,65,32)).to.be.a('string');
    });
    
    it("should return undefined for empty input", function () {
        expect(rgbToHexColor()).to.be.equal(undefined);
    });
    
    it('Return heh number', function () {
        expect(rgbToHexColor(52, 235, 104)).to.be.equal('#34EB68');
    });
    it("should return #000000 for (0, 0, 0)", function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
    });
    it("should return #FFFFFF for (255, 255, 255)", function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    });
    
});