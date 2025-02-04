const { User } = require('../lib/user');
const chai = require('chai');
const expect = chai.expect;

describe('User', function () {

    it('should create a class called User', function () {
        expect(User).to.exist;
    });

    context('Asynchronous JS', function () {

        describe('askInput', function () {

            it('should ask for and return the user input', async function () {
                this.timeout(10000);
                let inpt = await User.askInput();
                return expect(inpt).to.be.a("string");
            });

        });

        describe('validEmail', function () {

            it('should return false', function () {
                let input = User.validEmail('jp@gmail.co');
                expect(input).to.be.false;
            });

            it('should return true', function () {
                let input = User.validEmail('jp@gmail.com');
                expect(input).to.be.true;
            });

        });

        describe('getEmail', function () {

            it('should return false', async function () {
                this.timeout(10000);
                let inpt = await User.getEmail();
                return expect(inpt).to.be.false;
            });

            it('should return the email', async function () {
                this.timeout(10000);
                let inpt = await User.getEmail();
                return expect(inpt).to.be.a('string');
            });

        });

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

        describe('validName', function () {

            it('should return false', function () {
                let inpt = User.validName('Joseph');
                expect(inpt).to.be.false;
            });

            it('should return true', function () {
                let inpt = User.validName('Job Joseph');
                let inpt2 = User.validName('Job De La Joseph');

                expect(inpt).to.be.true;
                expect(inpt2).to.be.true;
            });

        });

        describe('formatName', function () {

            context('should return an object', function () {

                it('object should have properties first, last, middle if applicable', function () {
                    let inpt = User.formatName('job joseph');
                    let inpt1 = User.formatName('job j joseph');
                    let inpt2 = User.formatName('job de la joseph');

                    expect(inpt['first']).to.equal('Job');
                    expect(inpt.last).to.equal('Joseph');

                    expect(inpt1.first).to.equal('Job');
                    expect(inpt1.mid).to.equal('J');
                    expect(inpt1.last).to.equal('Joseph');

                    expect(inpt2.first).to.equal('Job');
                    expect(inpt2.mid).to.equal('De La');
                    expect(inpt2.last).to.equal('Joseph');
                });

            });

        });

        describe('getName', function () {

            it('should return false', async function () {
                this.timeout(10000);
                let inpt = await User.getName();
                return expect(inpt).to.be.false;
            });

            it('should return the object', async function () {
                this.timeout(10000);
                let inpt = await User.getName();
                return expect(inpt).to.be.a('object');
            });

        });

    });


})
