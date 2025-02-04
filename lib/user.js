const readline = require('readline');

class User {

    static async askInput() {

        // We need to create the interface everytime so that it won't
        // cause issue
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return await new Promise((resolve) => {

            rl.question('Enter an input: ', (input) => {
                rl.close();
                resolve(input);
            });

        });
    }

    static async getEmail() {
        let inpt = await User.askInput();
        let result = User.validEmail(inpt);
        return (result) ? inpt : false;
    }

    static validEmail(email) {
        return (email.endsWith('@gmail.com') || email.endsWith('@yahoo.com')) ? true : false;
    }

    static validContact(phone) {
        if (phone.length !== 12) return false;
        if (phone[3] !== "-" || phone[7] !== "-") return false;
        let cDashed = 0;

        for (let i = 0; i < phone.length; i++) {
            let elem = phone[i];
            if (elem === "-") cDashed++;
        }

        if (cDashed !== 2) return false;

        let numbers = phone.split("-");

        for (let j = 0; j < numbers.length; j++) {
            let num = numbers[j];

            if (!Number.isInteger(parseInt(num))) return false;
        }

        return true;
    }

    static async getContact() {
        let inpt = await User.askInput();
        let result = User.validContact(inpt);
        return (result) ? inpt : false;
    }

    static validName(name) {
        let arrName = name.split(' ');
        if (arrName.length <= 1) return false;
        return true;
    }

    static formatName(name) {
        let arrName = name.split(' ');
        let obj = {};

        if (arrName.length === 2) {
            obj['first'] = arrName[0][0].toUpperCase() + arrName[0].slice(1);
            obj['last'] = arrName[1][0].toUpperCase() + arrName[1].slice(1);
        } else {
            obj['first'] = arrName[0][0].toUpperCase() + arrName[0].slice(1);
            obj['mid'] = "";
            obj['last'] = arrName[arrName.length - 1][0].toUpperCase() + arrName[arrName.length - 1].slice(1);

            for (let i = 1; i < arrName.length - 1; i++) {

                if (i !== arrName.length - 2) {
                    obj['mid'] += arrName[i][0].toUpperCase() + arrName[i].slice(1) + " ";

                } else {
                    obj['mid'] += arrName[i][0].toUpperCase() + arrName[i].slice(1);
                }

            }

        }

        return obj;
    }

    static async getName() {
        let inpt = await User.askInput();
        if (User.validName(inpt)) {
            let nameObj = User.formatName(inpt);
            return nameObj;
        } else {
            return false;
        }

    }
}

module.exports = {
    User
}
