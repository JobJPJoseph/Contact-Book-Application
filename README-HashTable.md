# Hash Table

## Tasks
    `constructor`
        data
            It will consist of a few properties: `this.data` which will be an empty array.
        length
            represents the amount of occupied buckets in the array.
        load
            which will be set to 0.7. Once the occupation of the array exceeds that, we will resize the array.

    `hash`
        The method should return the decimal value of the argument. Assume that the argument is a string.

    `hashMod`
        The method should divide the decimal value of the argument based on the length of `this.data`

    `insert`
       The method should accept a single argument that will represent a name. We need to hash the first character of the string. This will be used to sort the name into the buckets. Each bucket is a Binary Search Tree. From there we will call insert in the context of the BST.

       Based on the actual phone contacts. It is lowercase by default printed with the first character capitilized.

    `collisions`
        The method should accept an index from hashing the name and the node to insert into the table. The goal for this method is iterate thru `this.data` in a circlular fasion. Why, because to find an empty spot in the array to insert the node.

    `resize`
        The method should create a new array where the length of the array is double in length of the `this.data`. From there it should re-hash the root's of the tree.

    `findContactByName`
        The method should accept a single argument that will represent a name. From here we could hash the first character to find the bucket it belongs to. Then traverse the tree to find the node.

    `findContactByNumber`
        The method should accept a single argument that will represent a phone number. We need to traverse through every valid tree in 'this.data' to find the node.

    `findContactByEmail`
        The method should accept a single argument that will represent a email. We need to traverse through every valid tree in 'this.data' to find the node.
