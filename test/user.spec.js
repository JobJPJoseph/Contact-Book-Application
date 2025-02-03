const { User } = require('../lib/user');
const chai = require('chai');
const expect = chai.expect;

describe('User', function () {

    it('should create a class called User', function () {
        expect(User).to.exist;
    });

    // let user;

    // beforeEach(function () {
    //     user = new User;
    // });


    context('Asynchronous JS', function () {

        describe('askInput', function () {

            it('should ask for and return the user input', async function () {
                this.timeout(8000);
                let inpt = await User.askInput();
                return expect(inpt).to.be.a("string");
            });

        });

        describe('validEmail', function () {

            it('should return false', function () {
                let input = User.validEmail('jp@gmail.co');
                expect(input).to.be.false;
            });

            it('should return true', async function () {
                let input = User.validEmail('jp@gmail.com');
                expect(input).to.be.true;
            });

        });

        describe('', function () {

        });

    });


})
