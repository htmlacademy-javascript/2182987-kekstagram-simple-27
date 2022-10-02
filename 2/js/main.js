/* Получение случайного числа:
Оригинал функции взят из учебника learn.javascript.ru
Ссылка на источник: https://learn.javascript.ru/task/random-int-min-max*/

function getRandomNum(min, max) {
  if(min > max) {
    const swap = min;
    min = max;
    max = swap;
  }
  return Math.floor(min + Math.random() * (max + 1 - min));
}

getRandomNum(0, 10);

// Проверка длины строки
function checkStringLength(string, length) {
  return string.length <= length;
}

checkStringLength('Это тестовая строка на 33 символа', 33);
