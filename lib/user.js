const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class User {

    static async askInput() {

        return await new Promise((resolve) => {

            rl.question('Enter an input: ', (input) => {
                rl.close();
                resolve(input);
            });

        });
    }

    static getEmail() {

    }

    static validEmail(email) {
        return (email.endsWith('@gmail.com') || email.endsWith('@yahoo.com')) ? true : false;
    }

}

module.exports = {
    User
}
