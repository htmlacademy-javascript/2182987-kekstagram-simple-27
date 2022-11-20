import {IMAGE_EFFECTS} from '../common/params.js';

const mainImageWrap = document.querySelector('.img-upload__preview');
const effectsSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
let currentEffect = IMAGE_EFFECTS.original;

// Инициализация слайдера
noUiSlider.create(effectsSlider, {
  start: IMAGE_EFFECTS.original.max,
  step: IMAGE_EFFECTS.original.step,
  connect: 'lower',
  range: {
    'min': IMAGE_EFFECTS.original.min,
    'max': IMAGE_EFFECTS.original.max
  }
});

// Обновление слайдера с новыми значениями
const updateSlider = (effect) => {
  effectsSlider.noUiSlider.updateOptions({
    start: effect.max,
    step: effect.step,
    range: {
      'min': effect.min,
      'max': effect.max
    }
  });
};

// Установка значения для эффекта
const setEffectValue = (style, value, unit = '') => {
  effectLevelValue.value = +value;
  mainImageWrap.style.filter = `${style}(${value}${unit})`;
};

// Изменение глубины эффекта
const onSliderChange = () => {
  setEffectValue(currentEffect.style, effectsSlider.noUiSlider.get(), currentEffect.unit);
};

// Прослушка изменения значения в слайдере
effectsSlider.noUiSlider.on('update', onSliderChange);

// Изменение эффекта
const changeEffect = (evt) => {
  mainImageWrap.classList.remove(`effects__preview--${currentEffect.name}`);
  if(evt === undefined || evt.target.value === 'none') {
    mainImageWrap.style.filter = 'none';
    effectsSlider.classList.add('hidden');
    currentEffect = IMAGE_EFFECTS.original;
    return;
  }
  currentEffect = IMAGE_EFFECTS[evt.target.value];
  effectsSlider.classList.remove('hidden');
  mainImageWrap.classList.add(`effects__preview--${currentEffect.name}`);
  updateSlider(currentEffect);
  setEffectValue(currentEffect.style, currentEffect.max, currentEffect.unit);
};

// Сброс до изначальных значений
const effectReset = () => {
  changeEffect();
};

export {changeEffect, effectReset};
