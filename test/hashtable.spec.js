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

        it('should set a property called size the represent the length of this.data', function () {
            expect(hashtable.size).to.equal(8);
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

            it('should increment the length property for the instance', function () {
                let str = 'Job';
                hashtable.insert(str, '239-503-1856','jp@gmail.com');
                expect(hashtable.length).to.equal(1);
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

    describe('collisions', function () {

        context('No collision', function () {

            it('should insert the node into the Hash Table as regularly', function () {
                hashtable.insert('Job', '239-503-1856', 'jp1@gmail.com');
                hashtable.insert('Isha', '239-503-1857', 'jp2@gmail.com');

                let idx1 = "J".toLowerCase().charCodeAt(0) % hashtable.data.length;
                let idx2 = "I".toLowerCase().charCodeAt(0) % hashtable.data.length;

                expect(hashtable.data[idx1].root.name).equal('Job');
                expect(hashtable.data[idx1].root.left).equal(null);
                expect(hashtable.data[idx1].root.right).equal(null);

                expect(hashtable.data[idx2].root.name).equal('Isha');
                expect(hashtable.data[idx2].root.left).equal(null);
                expect(hashtable.data[idx2].root.right).equal(null);
            });

        });

        context('With collision', function () {

            it('should continuely check the next index if its empty and insert the node', function () {
                hashtable.insert('Aisha', '239-503-1856', 'jp1@gmail.com');
                hashtable.insert('Isha', '239-503-1857', 'jp2@gmail.com');

                let idx1 = "A".toLowerCase().charCodeAt(0) % hashtable.data.length;

                expect(hashtable.data[idx1].root.name).equal('Aisha');
                expect(hashtable.data[idx1].root.left).equal(null);
                expect(hashtable.data[idx1].root.right).equal(null);

                expect(hashtable.data[idx1 + 1].root.name).equal('Isha');
                expect(hashtable.data[idx1 + 1].root.left).equal(null);
                expect(hashtable.data[idx1 + 1].root.right).equal(null);
            });

        });

    });

    let contactTable;

    beforeEach(function () {
        contactTable = new HashTable();
        contactTable.insert('Alaiya', '139-256-1253', 'alaiya@gmail.com');
        contactTable.insert('Alaiy', '139-256-1254', 'alaiy@gmail.com');
        contactTable.insert('Alaiyas', '139-256-1255', 'alaiyas@gmail.com');


        contactTable.insert('Biscuit', '582-552-1258', 'biscuit@gmail.com');
        contactTable.insert('Biscui', '582-552-1257', 'biscui@gmail.com');
        contactTable.insert('Biscuits', '582-552-1259', 'biscuits@gmail.com');


        contactTable.insert('Carson', '582-145-9632', 'carson@gmail.com');
        contactTable.insert('Car', '582-145-9631', 'car@gmail.com');
        contactTable.insert('Carsons', '582-145-9633', 'carsons@gmail.com');



        contactTable.insert('Dolton', '621-525-5874', 'dolton@gmail.com');
        contactTable.insert('Dolt', '621-525-5873', 'dolt@gmail.com');
        contactTable.insert('Doltons', '621-525-5875', 'doltons@gmail.com');


        contactTable.insert('Easton', '252-142-6324', 'easton@gmail.com');
        contactTable.insert('East', '252-142-6323', 'east@gmail.com');
        contactTable.insert('Eastons', '252-142-6325', 'eastons@gmail.com');


        contactTable.insert('Fikerton', '238-414-2589', 'fikerton@gmail.com');
        contactTable.insert('Fikert', '238-414-2587', 'fikert@gmail.com');
        contactTable.insert('Fikertons', '238-414-2588', 'fikertons@gmail.com');


    });

    describe('resize', function () {

        context('When the size of the hashtable exceeds 70%', function () {

            it('should reallocate the trees to a new array with a length that is double its previous', function () {
                contactTable.insert('Ian', '257-962-1475', 'ian@gmail.com');

                expect(contactTable.data.length).to.equal(16);
                expect(contactTable.length).to.equal(7);
                expect(contactTable.data[0]).to.equal(null);
                expect(contactTable.data[1].root.name).to.equal("Alaiya");
                expect(contactTable.data[9].root.name).to.equal("Ian");
                expect(contactTable.data[14]).to.equal(null);
            });

        });

    });

    describe('findContactByNumber', function () {

        it('should return null when target is nowhere to be found', function () {
            let node = contactTable.findContactByNumber('582-552-125926');
            expect(node).to.equal(null);
        });

        it('should traverse though each bucket until we find the target', function () {
            let node = contactTable.findContactByNumber('582-552-1259');
            expect(node.name).to.equal('Biscuits');
            expect(node.contact).to.equal('582-552-1259');

        });

    });

    describe('findContactByEmail', function () {

        it('should return null when target is nowhere to be found', function () {
            let node = contactTable.findContactByEmail("dolts@gmail.com");
            expect(node).to.equal(null);
        });

        it('should traverse though each bucket until we find the target', function () {
            let node = contactTable.findContactByEmail("dolt@gmail.com");
            expect(node.email).to.equal('dolt@gmail.com');
        });

    });

    describe('findContactByName', function () {

        it('should return null when target is nowhere to be found', function () {
            let node = contactTable.findContactByEmail("Job");
            expect(node).to.equal(null);
        });

        it('should traverse though each bucket until we find the target', function () {
            let node = contactTable.findContactByName("Eastons");
            expect(node.name).to.equal('Eastons');
        });

    });

    describe('delete', function () {

        context('deleteByName', function () {

            it('should remove the specified node from the tree', function () {
                contactTable.deleteByName('Carson');
                let node = contactTable.findContactByName('Carson');
                expect(node).to.equal(null);
            });

        });

        context('deleteByNumber', function () {

            it(`should set the specified node's contact to null`, function () {
                contactTable.deleteByContact('252-142-6323');
                let node = contactTable.findContactByName('East');
                expect(node.contact).to.equal(null);
                expect(node.name).to.equal('East');
            });

        });

        context('deleteByEmail', function () {

            it(`should set the specified node's email to null`, function () {
                contactTable.deleteByContact('alaiyas@gmail.com');
                let node = contactTable.findContactByName('Alaiyas');
                expect(node.email).to.equal(null);
                expect(node.name).to.equal('Alaiyas');
            });

        });

    });

});
