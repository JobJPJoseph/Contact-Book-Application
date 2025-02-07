const { User } = require('../lib/user');
const { HashTable } = require('../lib/hashtable');
const readline = require('readline');

class Interface {

    constructor() {
        this.id = null
        this.contacts = null;
    }

    async setUser() {
        let obj = await User.getName();
        if (!obj) {
            return await this.setUser();
        } else {
            this.id = obj;
        }

        this.contacts = new HashTable();
    }

    printId() {
        let name = "";

        if (this.id.mid) {
            name = `${this.id.first} ${this.id.mid} ${this.id.last}`;
        } else {
            name = `${this.id.first} ${this.id.last}`;
        }

        console.log("-".repeat(40));
        console.log(name);
        console.log("-".repeat(40));
    }

    printTrees() {
        this.contacts.print()
    }

    async handleCommands() {
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Enter Command: ', (inpt) => {
            let cmd = inpt.split(" ");
            console.log(cmd);

            switch(cmd[0]) {
                case "add":
                    // Should represent name, contact, email.
                    this.contacts.insert(cmd[1], cmd[2], cmd[3]);
                    this.contacts.print();
                    rl.close();
                    break;
                case 'display':

                    rl.close();
                    break;
                case find:
                    break;
                case remove:
                    break;
                default:
                    break;
            }

        });


    }

}

module.exports = {
    Interface
}
