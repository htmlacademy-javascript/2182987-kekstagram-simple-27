// Эффекты для фото
const ImageEffects = {
  ORIGINAL: {
    name: 'original',
    min: 0,
    max: 100,
    step: 1
  },
  CHROME: {
    name: 'chrome',
    style: 'grayscale',
    min : 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  SEPIA: {
    name: 'sepia',
    style: 'sepia',
    min : 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  MARVIN: {
    name: 'marvin',
    style: 'invert',
    min : 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  PHOBOS: {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  HEAT: {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
};

// Длина комментария
const commentsLength = {
  MIN: 20,
  MAX: 140
};

// Шаг масштабирования
const zoomRange = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

export {commentsLength, zoomRange, ImageEffects};
