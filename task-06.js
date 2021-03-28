//============ Задача 6 ===========

// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    // console.log('Blur');
    validationInput.value.length >= 6 
    ? validationInput.classList.add('valid')  
    : validationInput.classList.add('invalid')
}
