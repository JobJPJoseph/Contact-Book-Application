class ContactSearchTreeNode {
    constructor(val, phoneNumber, email) {
        this.name = val || undefined;
        this.contact = phoneNumber || undefined;
        this.email = email || undefined;
        this.left = null;
        this.right = null;
    }

}

class ContactSearchTree {

    constructor() {
        this.root = null;
    }

    insert(name, phoneNumber, email, branch=this.root) {
        if (this.root === null) {
            this.root = new ContactSearchTreeNode(name, phoneNumber, email);
        }

        if (branch === null) {
            return new ContactSearchTreeNode(name, phoneNumber, email);
        }
    }

}

module.exports = {
    ContactSearchTreeNode,
    ContactSearchTree,
}
