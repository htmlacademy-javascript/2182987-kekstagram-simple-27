// Проверка длины строки
function checkStringLengthRange (string, min = 0, max = Infinity) {
  return string.length >= min && string.length <= max;
}

// Проверка нажатой клавиши Esc
function isEscape (evt) {
  return evt.key === 'Escape';
}

// Проверка, если файл является картинкой
function isFileImage (filename) {
  return /^.*\.(jpg|jpeg|png|webp)$/i.test(filename);
}

// Установка значения полю
function setValue (input, value) {
  input.value = value;
}

export {checkStringLengthRange, isEscape, isFileImage, setValue};

