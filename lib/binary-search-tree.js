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

}

module.exports = {
    ContactSearchTreeNode,
    ContactSearchTree,
}
