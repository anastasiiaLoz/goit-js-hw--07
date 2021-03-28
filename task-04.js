
// ======== Задание 4 ==========

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const refs = {
    value: document.querySelector('#value'),
    btnIncrement: document.getElementsByTagName('button')[0],
    btnDecrement: document.getElementsByTagName('button')[1],
}

// console.log(refs.value);
// console.log(refs.btnIncrement);
// console.log(refs.btnDecrement);



refs.btnDecrement.addEventListener('click', function (){
    refs.value.innerHTML = parseInt(refs.value.innerHTML) +1;
})

refs.btnIncrement.addEventListener('click', function(){
    refs.value.innerHTML = parseInt(refs.value.innerHTML) -1;
})
