//1.Проверь, содержится ли строка "fun" в строке "JavaScript is fun!";

let str = "JavaScript is fun!";
    console.log(str.includes("fun")); // true 

/*2. Попробуй написать условие, которое выполняется только в случае,
     если переменная имеет одно из falsy значений;*/

let value = 0; // или "", null, undefined, NaN, false

if (!value) {
  console.log('Значение falsy');
}

/*3. Напиши шаблонную строку, которая включает переменные firstName, lastName и occupation,
     и выводит сообщение вроде "Hello, my name is John Doe. I am a software developer.";*/

let firstName = 'Anna';
let lastName = 'Selihova';
let occupation = 'software developer'
let message = `Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`;
    console.log (message);

/*4. Сравни null и undefined строго (===) и не строго (==), выведи результаты в консоль.
     Объясни своими словами, почему получились такие результаты */

let a = null
let b = undefined
    console.log (a == b) //true
    console.log (a === b) //false

/* По факту оба типа данных означают отсутствие значения у переменной.
   Но при этом null – означает намеренное отсутствие значения (инструмент для разработчика),
   а undefined – ненамеренное (возможно, значение будет присвоено переменной позже. */

/*5. Выведи в консоль результат выражения 1 + '1'. Да, этот удивительный JS...
     И снова попрошу тебя объяснить своими словами, что произошло*/

let value1 = 1
let value2 = '1'
let sum = value1 + value2;
     console.log (sum); //11

     /* При сложении, если один из операндов — строка, JavaScript приводит второй
        к строке и выполняет конкатенацию, а не математическое сложение. */
    
let value3 = 1
let value4 = +'1'
let summ = value3 + value4;
     console.log (summ); //2 

     // При этом + перед значением в JavaScript принудительно приводит его к типу number.