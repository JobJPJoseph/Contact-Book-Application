const { User } = require('../lib/user');
const { HashTable } = require('../lib/hashtable');

class Interface {

    constructor() {
        this.contacts = new HashTable();
    }



}

module.exports = {
    Interface
}
