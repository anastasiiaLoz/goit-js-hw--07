// ========  Задача 2 ========

// Напиши скрипт, который для каждого элемента массива ingredients 
// создаст отдельный li, после чего вставит все li за одну операцию 
// в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const arr = document.querySelector('#ingredients');

let newArr = ingredients.map(el => {

    const elLi = document.createElement('li');
    elLi.textContent = el;
    arr.appendChild(elLi);
    return elLi
});
console.log(newArr);