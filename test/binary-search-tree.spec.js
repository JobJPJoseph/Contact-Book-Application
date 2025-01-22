
const { ContactSearchTreeNode, ContactSearchTree } = require('../lib/binary-search-tree');

const chai = require('chai');
const expect = chai.expect;

describe('Contact Search Tree Node', function () {

    it('should create a class called ContactSearchTreeNode', function () {
        expect(ContactSearchTreeNode).to.exist;
    });

    let bstNode;
    let bstNodeNoArg;

    beforeEach(function () {
        bstNodeNoArg = new ContactSearchTreeNode();
        bstNode = new ContactSearchTreeNode("a");

    });

    describe('constuctor', function () {

        context('No argument', function () {

            it('should set it to undefined if no argument is sent', function () {
                expect(bstNodeNoArg.value).to.equal(undefined);
            });

        });

        context('With argument', function () {

            it('should accept a single argument and set the to the argument', function () {
                expect(bstNode.value).to.equal('a');
            });

        });

        it('should create a proprty called left and set it to null', function () {
            expect(bstNode.left).to.equal(null);
        });

        it('should create a property called right and set it to null', function () {
            expect(bstNode.right).to.equal(null);
        });

    });

});

// describe('Binary Search Tree', function () {

//     it('should create a class called ContactSearchTree', function () {
//         expect(ContactSearchTree).to.exist;
//     });

//     let bst = new ContactSearchTree();

//     describe('constructor', function () {

//         it('should initialize the property called this.root to null', function () {
//             expect(bst.root).to.equal(null);
//         });

//     });

//     describe('', function () {

//     });

// });
