const {expect,assert} = require('chai');
const library = require('./library');

describe("library", function() {
    describe("calcPriceOfBook", function() {
        it("invalid name of book", function() {
            expect(() => library.calcPriceOfBook(12,2020)).throw();
        });
        it("invalid year of book", function() {
            expect(() => library.calcPriceOfBook('hello','2dd')).throw();
        });
        it("year less than 1980", function() {
            expect(library.calcPriceOfBook('hello',1967)).equal('Price of hello is 10.00');
        });
        it("year equal to  1980", function() {
            expect(library.calcPriceOfBook('hello',1980)).equal('Price of hello is 10.00');
        });
        it("year bigger to  1980", function() {
            expect(library.calcPriceOfBook('hello',1989)).equal('Price of hello is 20.00');
        });
     });
     describe('findBook',function(){
        it('bookArr.length is 0',function(){
            expect(() => library.findBook([],'hello')).throw();
        });
        it('we found desired book',function(){
            expect(library.findBook(['one','two'],'one')).equal('We found the book you want.')
        });
        it('we dont found desired book',function(){
            expect(library.findBook(['one','two'],'three')).equal('The book you are looking for is not here!')
        });
     });
     describe('arrangeTheBooks',function(){
        it('invalid input string',function(){
            expect(() => library.arrangeTheBooks('hello')).throw();
        });
        it('invalid countbook value',function(){
            expect(() => library.arrangeTheBooks(-1)).throw();
        });
        it('avaliable is bigger than counterBook',function(){
            expect(library.arrangeTheBooks(3)).equal('Great job, the books are arranged.');
        });
        it('avaliable is equal to counterBook',function(){
            expect(library.arrangeTheBooks(40)).equal('Great job, the books are arranged.');
        });
        it('avaliable is less than counterBook',function(){
            expect(library.arrangeTheBooks(46)).equal('Insufficient space, more shelves need to be purchased.');
        });
     });
});
