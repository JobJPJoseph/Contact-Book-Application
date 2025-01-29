const { ContactSearchTree } = require('../lib/binary-search-tree');

class HashTable {

    constructor() {
        this.data = new Array(8).fill(null);
        this.length = 0;
        this.load = 0.7;
    }

    hash(char) {
        let count = 0;

        for (let i = 0; i < char.length; i++) {
            count += char.charCodeAt(i);
        }

        return count;
    }

    hashMod(val) {
        return this.hash(val) % this.data.length;
    }

    insert(name, contact, email) {
        let idx = this.hashMod(name[0].toLowerCase());

        if ((this.length / this.data.length) >= this.load) this.resize();

        if (this.data[idx] === null) {
            this.data[idx] = new ContactSearchTree();
            this.data[idx].insert(name, contact, email);
            this.length++;
        } else if (this.data[idx].root.name[0].toLowerCase() === name[0].toLowerCase()) {
            this.data[idx].insert(name, contact, email);
        } else {
            // Linear Probing
            this.collisions(idx + 1, name, contact, email);
            this.length++;
        }

    }

    collisions(idx, name, contact, email) {
        let i;

        if (idx >= this.data.length) {
            i = 0;
        } else {
            i = idx;
        }

        while(idx < this.data.length) {

            if (this.data[idx] === null) {
                this.data[idx] = new ContactSearchTree();
                this.data[idx].insert(name, contact, email);
                return;
            }

            if (idx >= this.data.length) {
                i = 0;
            } else {
                i++;
            }

        }
    }

}

module.exports = {
    HashTable
}
