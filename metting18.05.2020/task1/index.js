const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    timerId: null,
    startTimer() {
        let timerId = setInterval(() => {
            this.secondsPassed += 1;
            if (this.secondsPassed === 10) {
                this.secondsPassed += 0;
                this.minsPassed += 1;
            }
        }, 1000);
    },
    getTime() {
        letsecs = this.secondsPassed < 10 ? `0${this.secondsPassed}` : this.secondsPassed;
        return `${this.minsPassed}:${this.secondsPassed}`;
    },
    stopTImer(timerId) {
        clearInterval(timerId);
        this.timerId = null;
    },
    resetTimer() {
        this.stopTImer();
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
};



// const user = {
//     name: 'Andrey',
//     printer(age) {
//         console.log(`Hello ${this.name}, ${age}`)
//     }
// }

// let func = user.printer;