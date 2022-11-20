// Длина комментария
const commentsLength = {
  min: 20,
  max: 140
};

// Шаг масштабирования
const zoomRange = {
  min: 25,
  max: 100,
  step: 25
};

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

export {commentsLength, zoomRange, ImageEffects};
