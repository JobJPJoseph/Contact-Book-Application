class HashTable {

    constructor() {
        this.data = new Array(8).fill(null);
        this.length = 0;
        this.load = 0.7;
    }

}

module.exports = {
    HashTable
}
