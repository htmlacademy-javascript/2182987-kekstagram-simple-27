/* Получение случайного числа:
Оригинал функции взят из учебника learn.javascript.ru
Ссылка на источник: https://learn.javascript.ru/task/random-int-min-max*/
function getRandomNum(min, max) {
  if(min > max) {
    const swap = min;
    min = max;
    max = swap;
  }

  if((typeof min === 'number' && typeof max === 'number') && (min >= 0 && max >= 0)) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  return NaN;
}

// Получение рандомного элемента из массива
const getRandomElement = (array) => array[getRandomNum(0, array.length - 1)];

// Проверка длины строки
function checkStringLength(string, length) {
  return string.length <= length;
}

export {getRandomNum, getRandomElement, checkStringLength};

