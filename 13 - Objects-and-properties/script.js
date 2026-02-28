/*1. Создай объект, ключи в котором будут описывать тебя. Например, твое имя, возраст, увлечения и т.д. 
     Обязательно используй разные типы данных: имя - строка, возраст - число, хобби - массив и  т.д. 
     Затем выведи все свои свойства/свойства объекта в консоль(разными способами!);
  2. В объект из предыдущего пункта:
    - добавь новое свойство;
    - измени значение существующего свойства;
    - удали любое свойство.
    И снова выведи все свойства объекта в консоль разными способами!*/

     const infoAboutMe = {
        name:'Diana',
        age: 26,
        isEmployed: false,
        hobbies: ['filming', 'sport', 'reading']
     };
     infoAboutMe.adress = '7-A Chernova St, Yalta, Crimea' //добавила новое свойство
     infoAboutMe.name = 'Anna' //изменила значение существующего свойства
     delete infoAboutMe.isEmployed

     console.log (infoAboutMe.name); //доступ через точку (.)
     console.log(infoAboutMe['age']); //доступ через квадратные скобки ([])
     console.log (infoAboutMe.isEmployed); //доступ через точку (.)
     console.log(infoAboutMe['hobbies']);//доступ через квадратные скобки ([])
     console.log (infoAboutMe.adress); //доступ через точку (.)

    for (let key in infoAboutMe) {
        console.log(key, infoAboutMe[key]); // Через цикл for...in
    }

      // Через Object.keys / Object.values / Object.entries
      console.log(Object.keys(infoAboutMe)); // массив ключей
      console.log(Object.values(infoAboutMe)); // массив значений
      console.log(Object.entries(infoAboutMe)); // массив пар [ключ, значение]
