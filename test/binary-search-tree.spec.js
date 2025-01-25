
const { ContactSearchTreeNode, ContactSearchTree } = require('../lib/binary-search-tree');

const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);


describe('Contact Search Tree Node', function () {

    it('should create a class called ContactSearchTreeNode', function () {
        expect(ContactSearchTreeNode).to.exist;
    });

    let bstNode;
    let bstNodeNoArg;

    beforeEach(function () {
        bstNodeNoArg = new ContactSearchTreeNode();
        bstNode = new ContactSearchTreeNode("a", '239-503-1856', 'jp@gmail.com');

    });

    describe('constuctor', function () {

        context('No argument', function () {

            it('should set it to undefined if no argument is sent', function () {
                expect(bstNodeNoArg.name).to.equal(undefined);
                expect(bstNodeNoArg.contact).to.equal(undefined);
                expect(bstNodeNoArg.email).to.equal(undefined);
            });

        });

        context('With argument', function () {

            it('should accept a single argument and set the to the argument', function () {
                expect(bstNode.name).to.equal('a');
                expect(bstNode.contact).to.equal('239-503-1856');
                expect(bstNode.email).to.equal('jp@gmail.com');
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

describe('Binary Search Tree', function () {

    it('should create a class called ContactSearchTree', function () {
        expect(ContactSearchTree).to.exist;
    });

    let bst;
    let bstNoNodes
    let names = ['111115', '1113', '11111117', '11114', '112', '111111118', '1111116']; // :7


    beforeEach(function () {
        bstNoNodes = new ContactSearchTree();
        bst = new ContactSearchTree();

        bst.insert(names[0], '239-503-1856', 'jp1@gmail.com');
        bst.insert(names[1], '239-503-1857', 'jp2@gmail.com');
        bst.insert(names[2], '239-503-1858', 'jp3@gmail.com');
        bst.insert(names[3], '239-503-1859', 'jp4@gmail.com');
        bst.insert(names[4], '239-503-1855', 'jp5@gmail.com');
        bst.insert(names[5], '239-503-1854', 'jp6@gmail.com');
        bst.insert(names[6], '239-503-1853', 'jp7@gmail.com');
    });

    describe('constructor', function () {

        it('should initialize the property called this.root to null', function () {
            expect(bstNoNodes.root).to.equal(null);
        });

    });

    describe('insert', function () {

        it('should accept a single argument sort the value based on combined decimal value', function () {

            expect(bst.root.name).to.equal(names[0]);
            expect(bst.root.contact).to.equal('239-503-1856');
            expect(bst.root.email).to.equal('jp1@gmail.com');
        });

        context('When contact is smaller than root', function () {

            it('should set the node to the left of the root.', function () {
                let node = bst.root;
                expect(node.left.name).to.equal(names[1]);
            });

        });

        context('When contact is larger than root', function () {

            it('should set the node to the right of the root.', function () {
                let node = bst.root;
                expect(node.right.name).to.equal(names[2]);
            });

        });

    });

    describe('searchByContext', function () {

        // it('should accept a single argument that represents a phone number', function () {
        //     let cpnSpy = chai.spy.on(bst, 'searchByContext');

        //     bst.searchByContext('239-503-1859');

        //     expect(cpnSpy).to.have.been.called.with('239-503-1859');

        //     chai.spy.restore(bst, 'searchByContext');
        // });

        context('Context: contact', function () {

            context('When this not the correct tree', function () {

                it('should return null when no node is found', function () {
                    let expected = bst.searchByContext('239-503-1892');
                    expect(expected).to.equal(null);
                });

            });

            context('When this is the correct tree', function () {

                it('should return the node when found', function () {
                    let expected = bst.searchByContext('239-503-1858');
                    expect(expected.contact).to.equal('239-503-1858');
                });

            });
        });

        context('Context: email', function () {
            context('When this not the correct tree', function () {

                it('should return null when no node is found', function () {
                    let expected = bst.searchByContext('1111111111118');
                    expect(expected).to.equal(null);
                });

            });

            context('When this is the correct tree', function () {

                it('should return the node when found', function () {
                    let expected = bst.searchByContext('jp3@gmail.com');
                    expect(expected.email).to.equal('jp3@gmail.com');
                });

            });

        });

        context('Context: name', function () {
            context('When this not the correct tree', function () {

                it('should return false when no node is found', function () {
                    let expected = bst.searchByContext('111111114');
                    expect(expected).to.equal(null);
                });

            });

            context('When this is the correct tree', function () {

                it('should return the node when found', function () {
                    let expected = bst.searchByContext(names[2]);
                    expect(expected.name).to.equal(names[2]);
                });

            });

        });


    });

    // describe('deleteByContext', function () {

    //     context('Context: contact', function () {

    //         context('When the node is not found', function () {
    //             bst.insert(names[0], '239-503-1856', 'jp1@gmail.com');
    //             bst.insert(names[1], '239-503-1857', 'jp2@gmail.com');
    //             bst.insert(names[2], '239-503-1858', 'jp3@gmail.com');

    //             bst.deleteByContext();
    //         });

    //         context('When the node is found', function () {

    //         });

    //     });

    //     context('Context: email', function () {

    //         context('When the node is not found', function () {

    //         });

    //         context('When the node is found', function () {

    //         });

    //     });

    //     context('Context: name', function () {

    //         context('When the node is not found', function () {

    //         });

    //         context('When the node is found', function () {

    //         });

    //     });


    // });

});
