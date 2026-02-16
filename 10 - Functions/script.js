/*1. Напиши функцию, которая принимает строку и проверяет, является ли она
     палиндромом. Если да - функция возвращает true, если нет - false;*/

  function isPalindrome(str) {
  const lower = str.toLowerCase ();
  const reversed = lower.split ("").reverse().join("");
  return lower === reversed;
}

console.log(isPalindrome("anna"));   // true
console.log(isPalindrome("Anna"));   // true
console.log(isPalindrome("hello"));  // false

/*2. Напиши функцию, которая принимает строку (предложение) и находит первое
     самое короткое слово в ней и возвращает его;*/

  function theShortestWord (str) {
    const words = str.split (" ");
    let shortest = words [0];

    for (let i = 1; i < words.length; i++){
      if (words[i].length < shortest.length) {
        shortest = words[i];
      }
    }
  return shortest
  }

  console.log(theShortestWord("Я люблю изучать JavaScript")); // "Я"
  console.log(theShortestWord("Мой кот спит"));               // "Мой"

/*3. Напиши функцию, которая форматирует строку с цифрами в телефонный номер.
     Пример: createPhoneNumber(123456789) → 8 (123) 456-789;*/

  function createPhoneNumber(input) {

    const digits = input.toString().replace(/\D/g, ""); 
  if (digits.length < 11) {
    return "Номер некорректен";
  }

  const first = digits[0];               // первая цифра (обычно 8)
  const code = digits.slice(1, 4);       // три цифры кода региона
  const part1 = digits.slice(4, 7);      // следующие три цифры
  const part2 = digits.slice(7, 9);      // следующие две
  const part3 = digits.slice(9, 11);     // последние две

  return `${first} (${code}) ${part1}-${part2}-${part3}`;
}

console.log(createPhoneNumber(89161234567));   // 8 (916) 123-45-67
console.log(createPhoneNumber("89161234567")); // 8 (916) 123-45-67
console.log(createPhoneNumber("8-916-1234567"));// 8 (916) 123-45-67

//4. Напиши функцию, которая ищет минимальное и максимальное значение в массиве;

function findMinMax(array) {
  if (array.length === 0) {
    return null; // если массив пустой, возвращаем null
  }

  let min = array[0]; 
  let max = array[0]; 

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) min = array[i]; 
    if (array[i] > max) max = array[i]; 
  }

  return { min, max }; 
}

const numbers = [3, 7, 1, 9, 4];
console.log(findMinMax(numbers)); // { min: 1, max: 9 }

/* 5. *Напиши функцию, которая на вход принимает массив, а на выходе возвращает новый,
      отсортированный в порядке возрастания, массив. Попробуй реализовать алгоритм 
      сортировки самостоятельно. Если не получается - почитай про bubble sort и попробуй реализовать её.*/

  function bubbleSort(arr) {
  const sortedArray = [...arr]; 
  const n = sortedArray.length;

  for (let i = 0; i < n - 1; i++) {     
    for (let j = 0; j < n - 1 - i; j++) { 
      if (sortedArray[j] > sortedArray[j + 1]) {
        // меняем элементы местами
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
}

console.log(bubbleSort([2, 5, 9, 3])); // [2, 3, 5, 9]
console.log(bubbleSort([10, 3, 7, 6, 2])); // [2, 3, 6, 7, 10]

/* Это было очень тяжело. Большую часть задач я решала с помощью чата GPT.
   Боюсь, что мне понадобится дополнительно неделя, чтобы закрепить знания в этой теме.*/
