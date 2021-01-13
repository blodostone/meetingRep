class Sportsman {

    constructor(firstname) {
        console.log(this)
        this.firstname = firstname;
    }

    // get firstname() {
    //     if (this.firstname.length < 3) {
    //         throw new Error ('Invilied firstname');
    //     }

    //     return this._firstname;
    // }

    run() {
        console.log(`${this.firstname} is running`)
    }

};

class Swimmer extends Sportsman {
    constructor(firstname, swimStyle) {
        // lose context - example 1
      super(firstname);
      this.swimStyle = swimStyle;
    }

    swim() {
      console.log(`${this.firstname} is swimming ${this.swimStyle}`);
    }

    testFunc() {
        const binded = this.swim.bind(this);
        setTimeout(binded, 3000);
    }
};

//testing
// lose context - example 2
// console.log('static call');
// Swimmer.swim();

const sportsman = new Sportsman('Denis');
const  swimmer = new Swimmer ('User', 'Some style')
swimmer.name;
swimmer.swim()

// lose context - example 3
// const swinFunc = swimmer.swim;
// swimFunc();

// lose context - example 4
swimmer.testFunc();

// const obj = { name: 'Test'};
// console.log(obj)