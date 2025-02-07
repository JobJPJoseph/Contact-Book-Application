const { Interface } = require('../lib/interface');
const { User } = require('../lib/user');
const { HashTable } = require('../lib/hashtable'); // imports ContactSearchTree as well

const chai  = require('chai');
const { describe } = require('mocha');
const expect = chai.expect;

describe('Interface', function () {

    it('should create a class called Interface', function () {
        expect(Interface).to.exist;
    });

    let interfaceTest;

    beforeEach(function () {
        interfaceTest = new Interface();
    });

    describe('constructor', function () {

        it('should initialize a property called id to be set to null', function () {
            expect(interfaceTest.id).to.equal(null);
        });

        it('should create a property called contacts that will be set to null', function () {
            expect(interfaceTest.contacts).to.equal(null);
        });

    });

    // describe('setUser', function () {

    //     it('should ask for the user name', async function () {
    //         this.timeout(10000);
    //         await interfaceTest.setUser();
    //         return expect(interfaceTest.id).to.be.a('object');
    //     });

    //     it('should set the contacts to an empty HashTable', async function () {
    //         this.timeout(10000);
    //         await interfaceTest.setUser();
    //         return expect(interfaceTest.contacts).to.be.instanceOf(HashTable);
    //     });

    // });

    let interface;

    beforeEach(function () {
        interface = new Interface();
        interface.id = {
            first: "Job",
            mid: 'J',
            last: 'Joseph'
        }
        interface.contacts = new HashTable();

        interface.contacts.insert('Alaiya', '139-256-1253', 'alaiya@gmail.com');
        interface.contacts.insert('Alaiy', '139-256-1254', 'alaiy@gmail.com');
        interface.contacts.insert('Alaiyas', '139-256-1255', 'alaiyas@gmail.com');


        interface.contacts.insert('Biscuit', '582-552-1258', 'biscuit@gmail.com');
        interface.contacts.insert('Biscui', '582-552-1257', 'biscui@gmail.com');
        interface.contacts.insert('Biscuits', '582-552-1259', 'biscuits@gmail.com');


        interface.contacts.insert('Carson', '582-145-9632', 'carson@gmail.com');
        interface.contacts.insert('Car', '582-145-9631', 'car@gmail.com');
        interface.contacts.insert('Carsons', '582-145-9633', 'carsons@gmail.com');



        interface.contacts.insert('Dolton', '621-525-5874', 'dolton@gmail.com');
        interface.contacts.insert('Dolt', '621-525-5873', 'dolt@gmail.com');
        interface.contacts.insert('Doltons', '621-525-5875', 'doltons@gmail.com');


        interface.contacts.insert('Easton', '252-142-6324', 'easton@gmail.com');
        interface.contacts.insert('East', '252-142-6323', 'east@gmail.com');
        interface.contacts.insert('Eastons', '252-142-6325', 'eastons@gmail.com');


        interface.contacts.insert('Fikerton', '238-414-2589', 'fikerton@gmail.com');
        interface.contacts.insert('Fikert', '238-414-2587', 'fikert@gmail.com');
        interface.contacts.insert('Fikertons', '238-414-2588', 'fikertons@gmail.com');
    });

    describe('printContacts', function () {
        // No legit tests for this. Just figure out how to format the data

        describe('printId', function () {

            it('should print the name of the User', function () {
                interface.printId();
            });

        });

        describe('printTrees', function () {

            it('should print each bucket in the hash table', function () {
                interface.printTrees();
            });

        });

    });

    describe('handleCommands', function () {

        // context('insertion', function () {

        //     // We need to account for more than just the name
        //     it('should ask and insert the contact into the respective tree', async function () {
        //         this.timeout(25000);
        //         await interface.handleCommands();
        //         // search the new contact();
        //     });

        // });

        // context('printing', function () {

        //     it('should ask for input and print the tree', async function () {
        //         this.timeout(25000);
        //         await interface.handleCommands();
        //         // Make sure it prints out correctly
        //     });

        // });

        context('searching', function () {

            it('should ask for input and search for specified contact', async function () {
                await interface.handleCommands();
                // print out the node
            });

        });

        // context('deleting', function () {

        //     it('should ask for input and delete for specified contact', async function () {
        //         await interface.handleCommands();
        //         // Make sure to print tree
        //     });

        // });

    });

});
