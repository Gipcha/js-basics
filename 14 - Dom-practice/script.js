//1. Найди элемент на странице по его ID и измени его текстовое содержимое на что-то новое;

const description = document.getElementById('description');
description.textContent = 'Changed text';

//2. Используй JavaScript, чтобы изменить фон и цвет текста элемента с определенным классом;

const box = document.getElementsByClassName('box');
 box[1].style.color = 'purple';
 box[1].style.backgroundColor = 'pink';

//3. Напиши код, который создает новый параграф с текстом и добавляет его в конец документа;

const newParagraph = document.createElement ('p');
newParagraph.textContent = 'New text!';
document.body.append(newParagraph);

//4. Напиши функцию, которая удаляет элемент с указанным ID из документа;

function removeElementById (id) {
    const element = document.getElementById(id);
    element.remove();
}
removeElementById ('main-title') //заголовок удален

//5. Измени атрибут ссылки на новый URL и выведи его значение в консоль;

const changedLink = document.getElementById ('changed-link'); //нашли ссылку, она ведет к Instagram Help Center
changedLink.href = "https://miro.com"; //поменяли атрибут ссылки, теперь она ведет на miro.com

console.log(changedLink.href);

//6. Создай новый элемент, добавь к нему класс и добавь его в DOM;

const createNewDiv = document.createElement('div'); //создали div
createNewDiv.classList.add('new-class');// добавили ему класс
createNewDiv.textContent = "New element";// поместили контент в div
document.body.append(createNewDiv);// добавили этот div в dom


//7. Переключи класс у существующего элемента и проверьте его наличие в консоли.

const button = document.querySelector('.main-button'); //находим кнопку
button.classList.toggle('active'); //меняем класс

console.log(button.classList.contains('active')); //выводим в консоль


