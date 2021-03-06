// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4



const li = document.querySelectorAll('li.item')
console.log(`В списке ${li.length} категории.`);

li.forEach(el => {
    const category = el.querySelector('h2').textContent;
    // console.log(category);

    const totalEl = el.querySelectorAll('li').length;
    // console.log(toatlEl);

    console.log(`Категория: ${category}  \nКоличество элементов: ${totalEl}`);
})
