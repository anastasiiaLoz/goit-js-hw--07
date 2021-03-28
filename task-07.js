//=========== Задача 7 ============
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.


const refs = {
    fontSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.fontSizeControl.addEventListener('input', onInput);

function onInput(event){
    let size = refs.fontSizeControl.value;
    refs.text.style.fontSize = size + "px";
} 


