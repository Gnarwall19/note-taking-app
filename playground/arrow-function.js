var square = x => x * x;

console.log(square(9));

var user = {
    name: 'Michael',
    sayHi: () => {
        console.log(arguments);
        console.log(`hi. i'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments)
        console.log(`hi. i'm ${this.name}`);

    }
};

user.sayHi();
user.sayHi(1, 2, 3);