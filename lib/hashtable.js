const { ContactSearchTree } = require('../lib/binary-search-tree');

class HashTable {

    constructor() {
        this.data = new Array(8).fill(null);
        this.length = 0;
        this.load = 0.7;
        this.size = this.data.length;
    }

    hash(char) {
        let count = 0;

        for (let i = 0; i < char.length; i++) {
            count += char.charCodeAt(i);
        }

        return count;
    }

    hashMod(val) {
        return this.hash(val) % this.size;
    }

    insert(name, contact, email) {
        let idx = this.hashMod(name[0].toLowerCase());

        if ((this.length / this.data.length) >= this.load) this.resize();

        if (this.data[idx] && this.data[idx].root.name[0].toLowerCase() === name[0].toLowerCase()) {
            this.data[idx].insert(name, contact, email);
        } else {
            this.collisions(idx, name, contact, email);
            this.length++;
        }

    }

    collisions(idx, name, contact, email) {
        let i = idx;

        while(i < this.data.length) {

            if (this.data[i] === null) {
                this.data[i] = new ContactSearchTree();
                this.data[i].insert(name, contact, email);
                return;
            }

            i++;

            if (i >= this.data.length) {
                i = 0;
            }

        }
    }

    resize() {
        this.size = this.size * 2;
        let arr = new Array(this.size).fill(null);

        // Move everything form this.data to the new node
        let i = 0;

        while (i < this.data.length) {
            let bucket = this.data[i];

            if (bucket !== null) {

                // Can we change the context
                // checking for collisions is pointless
                let idx = this.hashMod(bucket.root.name[0].toLowerCase());
                arr[idx] = bucket;
            }

            i++;
        }

        this.data = arr;
    }

    findContactByNumber(phone) {

        for (let i = 0; i < this.data.length; i++) {
            let tree = this.data[i];

            if (tree) {

                let result = tree.searchByContext(phone);

                if (result) return result;
            }

        }

        return null;
    }

    findContactByEmail(email) {

        for (let i = 0; i < this.data.length; i++) {
            let tree = this.data[i];

            if (tree) {

                let result = tree.searchByContext(email);

                if (result) return result;
            }

        }

        return null;
    }

    findContactByName(name) {

        let idx = this.hashMod(name[0].toLowerCase());

        let node = this.data[idx].searchByContext(name);

        return (node) ? node : null;
    }

}

module.exports = {
    HashTable
}
