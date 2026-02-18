/*1 задание
Возьмите следующий код и приведите его в соответствие с общепринятым стандартом форматирования,
соблюдая отступы, выравнивание и правила расстановки пробелов:

function multiply(a,b){
  return a*b;
}
const person ={name:'Alice',age:30};
if(person.age>18){console.log('Adult');}
else{console.log('Minor');}*/

function multiply(a, b) {
  return a * b;
}

const person = { name: 'Alice', age: 30 };

if (person.age > 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}

/*

2 задание
Представьте, что вы работаете в команде, и вам нужно сделать код понятным для всех участников.
Перепишите следующий код, используя понятные и логичные имена переменных и функций:

function x(a, b) {
  let c = a * b;
  return c;
}
let d = x(5, 10);

*/

function calculateDistance(time, speed) {
  return time * speed;
}
const distance = calculateDistance(5, 10);

/*

3 задание
Убедитесь, что в коде используется единый стиль оформления. В следующем коде присутствуют смешанные стили кавычек,
разное использование var, let, и const, а также различное форматирование объектов и массивов. Исправьте код:

let items = ["apple", 'banana', "orange"];
let price = {apple: 1, banana: 2, orange:3 };
const total = price['apple'] + price["banana"] + price.orange;

function calculateTotal(items) {
  return items.reduce(function(total, item) {return total + item.price; }, 0); }

*/

const fruits = ['apple', 'banana', 'orange'];

const fruitsPrice = {
  apple: 1,
  banana: 2,
  orange: 3,
};
const totalPrice = fruitsPrice.apple + fruitsPrice.banana + fruitsPrice.orange;

function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price;
  }, 0);
}
// ИЛИ  

function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

/*

4 задание
Создайте функцию validateForm, которая принимает объект формы с полями name, email и password.
Она должна выполнять проверки для каждого поля. Если какое-то поле не заполнено или содержит неверные данные,
функция должна сразу возвращать ошибку, используя guard expressions. Если все данные верны,
функция должна возвращать сообщение "Форма успешно отправлена".

*/

const userInfo = {
  name: 'Alex',
  email: 'alexivanov1980@gmail.com',
  password: 'Alex123',
}

function validateForm(userInfo) {
  if (!userInfo || typeof userInfo !== 'object') {
    return 'Неверные данные формы';
  }

  if (!userInfo.name || userInfo.name.trim() === '') {
    return 'Некорректное имя пользователя';
  }

  if (!userInfo.email || !userInfo.email.includes('@')) {
    return 'Некорректный email';
  }

  if (!userInfo.password || userInfo.password.length < 6) {
    return 'Пароль должен содержать минимум 6 символов';
  }

  return 'Форма успешно отправлена';
}

