

//-----------------------------\\
//------- В  ПРОЦЕССЕ !!!!-----\\
//-----------------------------\\







//========= Задача 8 ==========
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


const refs = {
    controls: document.querySelector('#controls'),
    boxes: document.querySelector('#boxes'),
    renderBtn: document.getElementsByTagName('button')[2],
    destroyBtn: document.getElementsByTagName('button')[3],
}

//Random Color Function Generator
const random = Math.round(Math.random()*255);
const randomColor = () => `rgb(${random})`;


//Value of input (number)  ==== how many divs will create function createBoxes
//I need to connect value of input with renderBtn

refs.controls.addEventListener('input', onInput);

function onInput(event){
    refs.renderBtn =  event.currentTarget.value;
    refs.controls.value = refs.renderBtn;
    console.log(event.currentTarget.value);
}


// Connecting 'Create Button' with 'createBoxes Function'
refs.renderBtn.addEventListener('change', createBoxes(refs.controls.value));

createBoxes(amount){
    let divMarkup = refs.boxes.insertAdjacentHTML("afterbegin", `<div style='color:randomColor(), width:30px, height:30px'> `)
    console.log(divMarkup);
}

