// 1 задание

// 1. Посчитает и выведет в консоль
// количество категорий в ul#categories, то есть элементов li.item.

const categoryList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoryList.length}`)

// 2. Для каждого элемента li.item в 
// списке ul#categories, найдет и выведет в консоль текст 
// заголовка элемента(тега < h2 >) и 
//количество элементов в категории(всех вложенных в него < li >).;


categoryList.forEach(function (elementName) {
    const categoriesName = elementName.querySelector('h2');
    const elementsCount = elementName.querySelector('ul');

    console.log('Category:', categoriesName.textContent);
    console.log('Elements:', elementsCount.children.length);
})
