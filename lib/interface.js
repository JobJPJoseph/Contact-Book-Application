const { User } = require('../lib/user');
const { HashTable } = require('../lib/hashtable');

class Interface {

    constructor() {
        this.id = null
        this.contacts = null;
    }

    async setUser() {
        let obj = await User.getName();
        if (!obj) {
            return await this.setUser();
        } else {
            this.id = obj;
        }

        this.contacts = new HashTable();
    }

    printId() {
        let name = "";

        if (this.id.mid) {
            name = `${this.id.first} ${this.id.mid} ${this.id.last}`;
        } else {
            name = `${this.id.first} ${this.id.last}`;
        }

        console.log("-".repeat(40));
        console.log(name);
        console.log("-".repeat(40));
    }

    printTrees() {
        this.contacts.print()
    }

}

module.exports = {
    Interface
}
