//option1

// const items = document.querySelectorAll('.list-item');

// console.log(items);

// items.forEach(item => {
//     item.addEventListener("click", handleItemClick);
// });

// function handleItemClick() {
//     console.log('clicked');
// }


//option2

const list = document.querySelector('.list');
list.addEventListener('click', handlerListClick);

function handlerListClick(event) {
  if (event.target.className !== 'list-item') {
    return;
  }

  console.log(event.target.innerText);
};

// WEB FLOW !!!!!!!!!!
// 1. get data from server ==> [{ ... }, { ... }, { ... }]
// 2. render !!!!
// 3. handle event - UPDATED [{ ... }, { ... }, { ... }], dont touch DOM
// 4. re render

//algo

// 1. find task in array
// 2. update done field
// 3. call render

function handleTaskClick(event) {
    //TODO
}