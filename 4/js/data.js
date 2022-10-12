import {getRandomNum, getRandomElement} from './utils.js';
import {POSTS_QUANTITY, LIKES_RANGE, COMMENTS_RANGE} from './params.js';

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

// Конструктор объекта поста
const createComment = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomNum(LIKES_RANGE.min, LIKES_RANGE.max),
  comments: getRandomNum(COMMENTS_RANGE.min, COMMENTS_RANGE.max)
});

// Генерация постов
const posts = Array.from(
  {length: POSTS_QUANTITY}, (element, index) => createComment(index + 1)
);

export {posts};
