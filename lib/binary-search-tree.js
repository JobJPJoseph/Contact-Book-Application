class ContactSearchTreeNode {
    constructor(val) {
        this.value = val || undefined;
        this.left = null;
        this.right = null;
    }

}

class ContactSearchTree {

    constructor() {
        this.root = null;
    }

}

module.exports = {
    ContactSearchTreeNode,
    ContactSearchTree,
}
