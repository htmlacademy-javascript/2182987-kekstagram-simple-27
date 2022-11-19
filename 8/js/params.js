// Количество постов/фото
const POSTS_QUANTITY = 25;

// Интервал кол-ва лайков
const LIKES_RANGE = {
  min: 15,
  max: 200
};

// Интервал кол-ва комментариев
const COMMENTS_RANGE = {
  min: 0,
  max: 200
};

const COMMENT_LENGTHS = {
  min: 20,
  max: 140
};

// Шаг масштабирования
const ZOOM_RANGE = {
  min: 25,
  max: 100,
  step: 25
};

// Эффекты для фото
const IMAGE_EFFECTS = {
  original: {
    name: 'original',
    min: 0,
    max: 100,
    step: 1
  },
  chrome: {
    name: 'chrome',
    style: 'grayscale',
    min : 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  sepia: {
    name: 'sepia',
    style: 'sepia',
    min : 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  marvin: {
    name: 'marvin',
    style: 'invert',
    min : 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  phobos: {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  heat: {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
};

export {POSTS_QUANTITY, LIKES_RANGE, COMMENTS_RANGE, COMMENT_LENGTHS, ZOOM_RANGE, IMAGE_EFFECTS};
