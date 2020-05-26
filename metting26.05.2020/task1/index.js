const listEl = document.querySelector('.list');
// const el1 = document.querySelector('li');
const el2 = document.querySelector('li');

console.log(el2);
console.log(typeof el2);

const text = Array.from(el2).map(el => el.textContent);
console.log(text);

const elOne = document.createElement('li');
elOne.textContent = 1;
listEl.prepend(elOne);

const elTwo = document.createElement('li');
// elTwo.setAttribute('data-number', 8);
// console.log(elTwo.dataset);
elTwo.textContent = 8;
listEl.append(elTwo);

const specialEl = document.querySelector('.special');

const el4 = document.createElement('li');
el4.textContent = 4;
specialEl.before(el4);

const el6 = document.createElement('li');
el6.textContent = 6;
specialEl.after(el6);