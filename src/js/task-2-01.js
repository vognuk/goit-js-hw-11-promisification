// Задание 1
// Напиши функцию delay(ms), которая возвращает промис, 
// переходящий в состояние "resolved" через ms миллисекунд. 
// Значением исполнившегося промиса должно быть то кол-во миллисекунд 
// которое передали во время вызова функции delay.

let promise;

const delay = ms => {
  return promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
      reject("error");
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time} ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
