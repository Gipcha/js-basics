/* 1. Напиши программу, которая использует цикл for, чтобы вывести числа от 1 до 10;*/

for (let i = 0; i <= 10; i++) {
    console.log (i);
}

/*2. Напиши программу, которая использует цикл while, чтобы посчитать сумму чисел от 1 до 100;*/

let i = 1
let sum = 0
while (i <= 100) {
    sum = sum + i;
    i++;
}
console.log (sum)

/*3.*Выведи в консоль все простые числа от 0 до 100.*/

for (let number = 2; number <= 100; number++) {
  let isPrimeNumber = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrimeNumber = false;
      break;
    }
  }

  if (isPrimeNumber) {
    console.log(number);
  }
}
