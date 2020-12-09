// 1. learn requirement ++++
// 2. !!! create step by step algo (& input/output for funtions) ++++
// 3. write draft solution & testing ++++
// 4. refactoring & final testing --> final solution ++++


//algo
// 1. iterate numbers from 1 to N
// 2. check if number is prime or not
    //2.1 iterate number from 2 to NUM - 1
    //2.2 ....

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false
        }
    }

    return true;
}

function getPrime(n) {
    for(let i = 2; i < n; i++) {
        if(isPrime(i)) {
           console.log(i);
        }
    }

}


//test fuction
console.log(getPrime(7));
console.log(getPrime(9));