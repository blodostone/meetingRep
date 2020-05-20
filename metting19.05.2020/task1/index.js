function printMessage(age) {
    console.log(`Hello ${this.firstName}, email ${this.email}, age: ${age}`);
}

let user = {
    firstName: "Alex",
    email: "gmail.com"
}

// let func = printMessage.bind(user)(30);
// printMessage.bind(user)(30, 'Kiev');
// printMessage.bind(user, 30)('Kiev');
// printMessage.bind(user, 30, 'Kiev');

//1 use rind
//input:
//output:
// function bind(func, context, ...args) {
//     console.log(args);
//     return func.bind(context, ...args);
// }

// bind1(printMessage, user, 30, 'Kiev');

// bind(printMessage, user)(30, 'Kiev');
// bind(printMessage, user, 30)('Kiev');
// bind(printMessage, user, 30, 'Kiev')();

// //2 use call/apply
function bind2(func, context, ...args) {
    return function(...funcArgs) {
        console.log(funcArgs);
        let res = func.apply(context, funcArgs.concat(args));
        return res;

    }
}

bind2(printMessage, user)(30, 'Kiev');
bind2(printMessage, user, 30)('Kiev');
bind2(printMessage, user, 30, 'Kiev')();

//3 custom bind

//algo
//1. put func to the context
//2. call func as object property
// function bind(func, context, ...bindArgs) {
//     return function(...funcArgs) {
//         let copyContext = Object.assign({}, context)
//         copyContext.temp = func;

//         return copyContext.temp(...bindArgs, ...funcArgs);

//     }

// }

// bind(printMessage, user)(30, 'Kiev');
// bind(printMessage, user, 30)('Kiev');
// bind(printMessage, user, 30, 'Kiev')();

console.log(user);