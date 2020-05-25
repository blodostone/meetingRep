class Sportman {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.merried = false;
    }


    run() {
        console.log(`${this.name} is running`)
    }

}

class Swimmer extends Sportman {
    constructor(name, style) {
        super(name);
        this.style = style;
    }

    swim() {
        console.log(`${this.name} swimming ${this.style}`)
    }

}

const sw1 = new Swimmer('John', 'top-style');

console.log(sw1);

sw1.run();