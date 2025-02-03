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

        // describe('askInput', function () {

        //     it('should ask for and return the user input', async function () {
        //         this.timeout(10000);
        //         let inpt = await User.askInput();
        //         return expect(inpt).to.be.a("string");
        //     });

        // });

        // describe('validEmail', function () {

        //     it('should return false', function () {
        //         let input = User.validEmail('jp@gmail.co');
        //         expect(input).to.be.false;
        //     });

        //     it('should return true', function () {
        //         let input = User.validEmail('jp@gmail.com');
        //         expect(input).to.be.true;
        //     });

        // });

        // describe('getEmail', function () {

        //     it('should return false', async function () {
        //         this.timeout(10000);
        //         let inpt = await User.getEmail();
        //         return expect(inpt).to.be.false;
        //     });

        //     it('should return the email', async function () {
        //         this.timeout(10000);
        //         let inpt = await User.getEmail();
        //         return expect(inpt).to.be.a('string');
        //     });

        // });

        describe('validContact', function () {

            it('should return false', function () {
                let inpt1 = User.validContact('239-2025-525');
                let inpt2 = User.validContact('23j-njk-2525');
                let inpt3= User.validContact('13--233-2632');
                expect(inpt1).to.be.false;
                expect(inpt2).to.be.false;
                expect(inpt3).to.be.false;
            });

            it('should return true', function () {
                let inpt = User.validContact('239-503-1856');
                expect(inpt).to.be.true;
            });

        });

        describe('getContact', function () {

            it('should return false', async function () {
                this.timeout(12000);

                let inpt = await User.getContact();
                return expect(inpt).to.be.false;
            });

            it('should return true', async function () {
                this.timeout(12000);

                let inpt = await User.getContact();
                return expect(inpt).to.be.a('string');
            });

        });

    });


})
