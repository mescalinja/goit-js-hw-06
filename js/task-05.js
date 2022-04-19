//Напиши скрипт который, при наборе текста 
// в инпуте input#name - input(событие input), 
// подставляет его текущее значение в span#name 
//- output.Если инпут пустой, в спане должна 
//отображаться строка "Anonymous".
//

const formInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

formInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value
})

// formInput.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
// }

