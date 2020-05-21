const user = {
    firstName: "John",
    lastName: 'Doe',

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    setFullName(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ');
    },

    set fullName(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ');
    },

    set firstName(name) {
        if (typeof name === 'string') {
            this._firstName = name;
        } else {
            console.error("Not a string");
        }
    },
    get firstName() {
        return this._firstName;
    },
}

// console.log(user.fullName);

// user.setFullName('Adam Sendler');
// user.fullName = 'Sam Linkoln';

// console.log(user.fullName);

user._firstName = 1;
console.log(user._firstName);