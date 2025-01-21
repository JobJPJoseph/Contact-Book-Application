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
