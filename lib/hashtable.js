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

}

module.exports = {
    HashTable
}
