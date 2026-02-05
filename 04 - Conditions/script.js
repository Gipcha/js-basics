/* 1. Напиши программу, которая проверяет число и выводит сообщение,
      является ли оно положительным, отрицательным или нулем;*/


const value = Number(prompt('Укажи число'));

if (Number.isNaN(value)) {
    console.log('Это не число :(');
} else if (value < 0) {
    console.log('Это отрицательное число');
} else if (value === 0) {
    console.log('Это ноль');
} else {
    console.log('Это положительное число');
}

/* 2. Напиши программу, которая запрашивает у пользователя его рост и вес,
      на основании этих данных вычисляет ИМТ, и выводит сообщение о том,
      в каком диапазоне находится его ИМТ;*/

const weight = Number(prompt('Укажи вес'));
const height = Number(prompt('Укажи рост в метрах (пример: 1.69)'));

if (
  Number.isNaN(weight) ||
  Number.isNaN(height) ||
  weight <= 0 ||
  height <= 0
) {
  console.log('Неверные данные');
} else {
  const imt = weight / (height * height);

    if (imt < 18.5) {
    console.log('У тебя дефицит массы тела');
  } else if (imt <= 24.9) {
    console.log('У тебя нормальная масса тела');
  } else if (imt <= 29.9) {
    console.log('У тебя избыточная масса тела (предожирение)');
  } else if (imt <= 34.9) {
    console.log('У тебя ожирение первой степени');
  } else if (imt <= 39.9) {
    console.log('У тебя ожирение второй степени');
  } else {
    console.log('У тебя ожирение третьей степени');
  }
}

/* 3. Используй оператор switch, чтобы вывести название месяца на основе введенного
      пользователем числа (1-12);*/

const month = Number(prompt('Укажи номер месяца'));
let monthName;

switch (month) {
    case 1:
        monthName = 'Январь';
        break;
    case 2:
        monthName = 'Февраль';
        break;
    case 3:
        monthName = 'Март';
        break;
    case 4:
        monthName = 'Апрель';
        break;
    case 5:
        monthName = 'Май';
        break;
    case 6:
        monthName = 'Июнь';
        break;
    case 7:
        monthName = 'Июль';
        break;
    case 8:
        monthName = 'Август';
        break;
    case 9:
        monthName = 'Сентябрь';
        break;
    case 10:
        monthName = 'Октябрь';
        break;
    case 11:
        monthName = 'Ноябрь';
        break;
    case 12:
        monthName = 'Декабрь';
        break;
    default:
        monthName = 'Неверный месяц';
}

console.log (monthName)

/*4. Придумай свое условие и опиши его в помощью оператора switch/case.*/
const moodNumber = Number(prompt('Выбери число от 1 до 5 и я расскажу каламбур'));

let mood;

switch (moodNumber) {
    case 1:
        mood = '— О чем думают овцы? — О своем, овечном.';
        break;
    case 2:
        mood = '— Что будет, если поджечь Поттера? — Запах Гари.';
        break;
    case 3:
        mood = '— Почему охранник на рынке всегда вежливый? — Он следит за базаром.';
        break;
    case 4:
        mood = '— Что делают кофейные зерна перед смертью? — Молятся.';
        break;
    case 5:
        mood = '— Как называют человека, который продал свою печень? — Обеспеченный.';
        break;
    default:
        mood = 'Такого числа нет — выбери от 1 до 5';
}

console.log(mood);


