// Проверка длины строки
const checkStringLengthRange = (string, min = 0, max = Infinity) => string.length >= min && string.length <= max;

// Проверка нажатой клавиши Esc
const isEscape = (evt) => evt.key === 'Escape';

// Проверка, если файл является картинкой
const isFileImage = (filename) => /^.*\.(jpg|jpeg|png|webp)$/i.test(filename);

// Установка значения полю
const setValue = (input, value) => {
  input.value = value;
};

export {checkStringLengthRange, isEscape, isFileImage, setValue};

