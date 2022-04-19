//Напиши скрипт, который реагирует на изменение значения 
//input#font - size - control(событие input) 
//и изменяет инлайн - стиль span#text обновляя свойство font - size.
//В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

input.addEventListener("input", inputRange);

function inputRange(event) {
    output.style.fontSize = event.currentTarget.value + "px";
}
