const { HashTable } = require('../lib/hashtable');

const chai = require('chai');
const expect = chai.expect;

describe('Hash Table', function () {

    it ('The HashTable class should exist', function () {
        expect(HashTable).to.exist;
    });

    let hashtable;

    beforeEach(function () {
        hashtable = new HashTable();
    });

    describe('constructor', function () {

        it('should set a property called data to a default size of 8', function () {
            expect(hashtable.data).to.exist;
            expect(hashtable.data.length).to.equal(8);
        });

        it('should set a property called length to 0', function () {
            expect(hashtable.length).to.equal(0);
        });

        it('should set a property called load to 0.7', function () {
            expect(hashtable.load).to.equal(0.7);
        });

    });

    describe('hash', function () {
        // changes value into a string and iterates thru it.

        it('should return the decimal value of the argument', function () {
            let char = "a";
            let count = 0;

            for (let i = 0; i < char.length; i++) {
                count += char.charCodeAt(i);
            }

            let result = hashtable.hash("a");
            expect(count === result).to.be.true;

        });

    });

    describe('hashMod', function () {
        // uses the result from the hash and divides it by the length of data
    });

});
