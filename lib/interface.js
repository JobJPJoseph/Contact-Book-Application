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


}

module.exports = {
    Interface
}
