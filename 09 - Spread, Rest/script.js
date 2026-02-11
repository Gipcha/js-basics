//1. Создай функцию, которая принимает произвольное количество чисел и возвращает их среднее значение;

function getAverage(...numbers) {
  if (numbers.length === 0) return 0;

  return numbers.reduce((acc, item) => acc + item, 0) / numbers.length;
}



/*2. Создай функцию, которая принимает объект с информацией о пользователе (имя, возраст, страна)
     и возвращает строку с этой информацией, используя деструктуризацию;*/

const user = { name: 'Anna', age: 26, country: 'Russia' };
function getUserInfo({ name, age, country }) {
  return `Name: ${name}, Age: ${age}, Country: ${country}`;
}
console.log(getUserInfo(user));

/*3. Создай объект с вложенными объектами и массивами. Используй деструктуризацию,
     чтобы извлечь несколько значений на разных уровнях вложенности;*/
    
const movie = {
  title: 'Bugonia',
  year: 2025,
  actors: ['Emma Stone', 'Aidan Delbis', 'Jesse Plemons'],
  director: {
    name: 'Yorgos Lanthimos',
    country: 'Greece'
  }
};

const {
  title,
  actors: [firstActor],
  director: { name }
} = movie;

console.log(title); //Bugonia  
console.log(firstActor);  //Emma Stone     
console.log(name); //Yorgos Lanthimos

/*4. Используй оператор `spread` для создания нового массива, который включает все элементы 
     исходного массива и добавляет несколько новых элементов в начале и в конце;*/

const colours1 = ['red', 'blue', 'green'];
const colours2 = ['pink', 'purple', 'orange'];
const combinedColours = ['black', 'white', ...colours1, ...colours2, 'yellow', 'gray'];

console.log(combinedColours); //['black', 'white', 'red', 'blue', 'green', 'pink', 'purple', 'orange', 'yellow', 'gray']

/*5. Используй оператор `rest` для создания функции, которая принимает объект с параметрами 
     и возвращает новый объект без одного указанного параметра.*/


const tickets = {guest:'Kate', seat:'18', partner:'+'}
function removeKey(tickets, keyToRemove) {
  const { [keyToRemove]: _, ...rest } = tickets;
  return rest;
}

console.log(removeKey(tickets, 'seat')); // '18'
console.log(removeKey(tickets, 'guest')); // 'Kate'
