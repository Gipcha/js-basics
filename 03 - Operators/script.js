//1. Напиши код, который решает примеры с картинки выше. Результаты округлить;
let a = 2 * 2 + 2;
console.log (a); //6

let b = Math.sin (54 * Math.PI / 180) * Math.cos (16 *Math.PI / 180);
b = b ** 2;
console.log (b); //0.60

let c = 16 * Math.sqrt (13.2 * 71.90);
let d = 2.4 / 7 ** 4;
let FirstPart = c / d;
result = FirstPart + 3 ** Math.sqrt (49);
answer = result * 2 ** 7;
console.log (answer); //63399251.63

/* 2. Есть несколько числовых переменных (задай их самостоятельно).
      С помощью арифметических операторов и операторов сравнения определи,
      четное это число или нет;*/

let number = 8;
if (number % 2 === 0) {
    console.log(number + " — чётное число");
} else {
    console.log(number + " — нечётное число");
} // 8 - четное число


let number2 = 3;
if (number2 % 2 === 0) {
    console.log(number2 + " — чётное число");
} else {
    console.log(number2 + " — нечётное число");
} // 3 - нечетное число

let number3 = 35.6;
if (number3 % 2 === 0) {
    console.log(number3 + " — чётное число");
} else {
    console.log(number3 + " — нечётное число");
} // 35.6 - нечетное число

/* 3. Напиши программу, которая проверяет, если переменная name пуста или не задана,
      то в консоль должно выводиться сообщение "Hello, Guest!". Если переменная name 
      содержит значение, то программа должна вывести сообщение "Hello, [name]!",
      где [name] — это значение переменной.*/

let userName = "Anna";
if (!userName) {
    console.log ("Hello, Guest!");
} else {
    console.log (`Hello, ${userName}!`);
}