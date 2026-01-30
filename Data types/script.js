/*1.Объяви переменные и присвой им значения разных типов. 
    Используй оператор typeof, чтобы вывести в консоль типы
    этих переменных; */

const Greeting = "Hello!"; 
console.log (typeof Greeting); //string

const age = 26; 
console.log (typeof age); //number


const isItclear = true; 
const isItHard = false;
console.log (typeof isItclear); //boolean
console.log (typeof isItHard); //boolean

let x;
console.log(x);
console.log (typeof x); //undefined

const emptyValue = null;
console.log(emptyValue); // null
console.log(typeof emptyValue); // object


const friends = ["Kseniya", "Nastya", "Tanya"];
console.log(friends[1]); // "Nastya". 
console.log(typeof friends); // object Это массив

const person = {
  name: "Kseniya",
  age: 23,
  isEmployed: false
};
console.log(person.name); // "Kseniya" 
// console.log(person.name);
console.log(typeof person); // object Это обьект

function greet(name) {
  return `Привет, ${name}!`;
}
console.log(greet("Мир")); // "Привет, Мир!" Это функция

/*2.Изучи разницу между хранением данных по ссылке и по значению более детально.
    Напиши своими словами, как ты это понял.
    Приведи примеры, которые показывают эту разницу.*/

/* Хранение по значению означает, что при присваивании копируется само значение,
   и изменения одной переменной не влияют на другую. Пример ниже:*/
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

/* Хранение по ссылке означает, что переменные указывают на один и тот же объект в памяти, 
   поэтому изменения через одну переменную видны через другую.*/
let person1 = {
  name: "Kseniya"
};
let person2 = person1;
person2.name = "Nastya";
console.log(person1.name); // "Nastya"
console.log(person2.name); // "Nastya"
