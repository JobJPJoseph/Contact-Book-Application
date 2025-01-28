const { HashTable } = require('../lib/hashtable');
const { ContactSearchTree } = require('../lib/binary-search-tree');

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

        it('should return the result of hashing the argument by the data length', function () {
            let char = "a";
            let count = 0;

            for (let i = 0; i < char.length; i++) {
                count += char.charCodeAt(i);
            }

            let hashedVal = count % hashtable.data.length;
            let result = hashtable.hashMod("a");
            expect(hashedVal === result).to.be.true;
        });

    });

    describe('insert', function () {

        context('When the bucket is empty', function () {

            it('should insert the name into the bucket', function () {
                let str = 'Job';
                let hashedChar = str.toLowerCase().charCodeAt(0);

                hashtable.insert(str, '239-503-1856','jp@gmail.com');

                let idx = hashedChar % hashtable.data.length;

                expect(hashtable.data[idx].root.name).to.equal(str);
            });

        });

        context('When the bucket is not empty', function () {

            it('should insert the name and sort the name into the bucket', function () {
                let str = 'Job';
                hashtable.insert(str, '239-503-1856','jp@gmail.com');

                let str1 = 'Josh';
                let hashedChar1 = str1.toLowerCase().charCodeAt(0);
                hashtable.insert(str1, '239-503-1857','jp2@gmail.com');
                let idx1 = hashedChar1 % hashtable.data.length;
                expect(hashtable.data[idx1].root.right.name).to.equal(str1);
            });

        });

    });

});
