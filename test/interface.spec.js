const { Interface } = require('../lib/interface');
const { User } = require('../lib/user');
const { HashTable } = require('../lib/hashtable'); // imports ContactSearchTree as well

const chai  = require('chai');
const expect = chai.expect;

describe('Interface', function () {

    it('should create a class called Interface', function () {
        expect(Interface).to.exist;
    });

    let interface;

    beforeEach(function () {
        interface = new Interface();
    });

    describe('constructor', function () {

        it('should initialize a property called id to be set to null', function () {
            expect(interface.id).to.equal(null);
        });

        it('should create a property called contacts that will be set to null', function () {
            expect(interface.contacts).to.equal(null);
        });

    });

    describe('setUser', function () {

        it('should ask for the user name', function () {
            interface.setUser();
            expect(interface.id).to.be.a('object');
        });

        it('should set the contacts to an empty HashTable', function () {
            interface.setUser();
            expect(interface.id).to.be.a('object');
            expect(interface.contacts).to.be.instanceOf(HashTable);
        });

    });

    beforeEach(function () {
        interface = new Interface();
        interface.id = {
            first: "Job",
            mid: 'J',
            last: 'Joseph'
        }
        interface.contacts = new HashTable();
    });

    describe('printContacts', function () {
        // No legit tests for this. Just figure out how to format the data

        describe('printId', function () {

            it('should print the name of the User', function () {
                console.log(interface.contacts);
            });

        });

    });


});
