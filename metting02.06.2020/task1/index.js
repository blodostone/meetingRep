const itemElems = document.querySelectorAll('.list-item');
const listElem = document.querySelector('.list');

console.log(itemElems);

function sayHi(event) {
    if (event.target.classList.contains('list-item'))
        console.log(event.target.textContent);
}

listElem.addEventListener('click', sayHi);


// window.addEventListener('click', () => {
//     console.log('window');
// })

// window.addEventListener('click', () => {
//     event.stopPropagation();
//     console.log('window');
// }, true)

// document.addEventListener('click', () => {
//     console.log('document');
// })

// window.addEventListener('click', () => {
//     console.log('window');
// }, true);
// document.addEventListener('click', () => {
//     console.log('document');
// });






// itemElem1.addEventListener('click', sayHi);
// // === 2 ===
// const itemElem2 = document.querySelector('.list-item:nth-child(2)');
// itemElem2.addEventListener('click', sayHi);
// // === 3 ===
// const itemElem3 = document.querySelector('.list-item:last-child');
// itemElem3.addEventListener('click', sayHi);