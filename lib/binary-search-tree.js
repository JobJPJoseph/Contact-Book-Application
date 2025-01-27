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

    hash(name) {
        let decimal = 0;

        for (let i = 0; i < name.length; i++) {
            decimal += name.charCodeAt(i);
        }

        return decimal;
    }

    insert(name, phoneNumber, email, branch=this.root) {
        if (this.root === null) {
            this.root = new ContactSearchTreeNode(name, phoneNumber, email);
            return;
        }

        if (branch === null) return new ContactSearchTreeNode(name, phoneNumber, email);

        let val = this.hash(name);
        let branchVal = this.hash(branch.name);

        if (val < branchVal) {
            branch.left = this.insert(name, phoneNumber, email, branch.left);
        } else {
            branch.right = this.insert(name, phoneNumber, email, branch.right);
        }


        return branch;
    }

    searchByContext(arg, branch=this.root) {
        if (this.root === null) return null;

        if (branch === null) return null;

        if (arg === branch.name || arg === branch.contact || arg === branch.email) return branch;

        let left = this.searchByContext(arg, branch.left);
        let right = this.searchByContext(arg, branch.right);

        return left || right;
    }

    printContactTree(branch=this.root) {
        if (this.root = null) return null;

        if (branch === null) return;

        this.printContactTree(branch.left);
        console.log(branch.name);
        this.printContactTree(branch.right);

        return branch;
    }

    deleteByContext(arg, branch=this.root) { // BT deletion
        if (this.root === null) return null;
        // if we don't find our target
        if (branch === null) return branch;

        branch.left = this.deleteByContext(arg, branch.left);
        branch.right = this.deleteByContext(arg, branch.right)

        // if we have are target
        if (arg === branch.name || arg === branch.contact || arg === branch.email) {

            // if arg is contact or email
            if (arg === branch.contact) {
                branch.contact = null;
                return branch;
            } if (arg === branch.email) {
                branch.email = null;
                return branch;
            } else {
                // if arg is name

                // No child
                if (branch.left === null && branch.right === null) {
                    return null;
                }

                // Two children
                if (branch.left && branch.right) {
                    let node = this.inOrderPredecessor(branch.left);

                    if (node === null) {
                        branch.name = branch.left.name;
                        branch.contact = branch.left.contact;
                        branch.email = branch.left.email;
                        branch.left = null;
                        return branch;
                    } else {
                        branch.name = node.name;
                        branch.contact = node.contact;
                        branch.email = node.email;
                        return branch;
                    }

                }

                // One child
                return branch.left || branch.right;
            }



        }

        return branch;
    }

    inOrderPredecessor(branch) {
        // if not right property
        if (branch.right === null) return null;

        while (branch.right.right) {
            branch = branch.right;
        }

        let node = branch.right;
        branch.right = null;

        return node;
    }
}

module.exports = {
    ContactSearchTreeNode,
    ContactSearchTree,
}
