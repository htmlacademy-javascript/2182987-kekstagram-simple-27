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

getRandomNum(0, 10);

// Проверка длины строки
function checkStringLength(string, length) {
  return string.length <= length;
}

checkStringLength('Это тестовая строка на 33 символа', 33);

// Список шаблонов для отзывов
const DESCRIPTIONS = [
  'Я не забуду это лето!',
  'Вот так мы отдыхаем 😁',
  'Весь в работе',
  'Мне нужны шестимесячные каникулы дважды в год',
  'Жизнь не идеальна, а вот мой лук – да.',
  'Стресс не подходит к моему наряду',
  'К трудовой недельке - готовы!',
  'Если ты ищешь того человека, который изменит твою жизнь, просто возьми и посмотри в зеркало.',
];

// Количество постов/фото
const POSTS_QUANTITY = 25;

// Получение рандомного элемента из массива
const getRandomElement = (array) => array[getRandomNum(0, array.length - 1)];

// Конструктор обхекта поста
const createComment = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomNum(15, 200),
  comments: getRandomNum(0, 200)
});

// Создание постов
const posts = Array.from({length: POSTS_QUANTITY}, (element, index) => createComment(index + 1));
