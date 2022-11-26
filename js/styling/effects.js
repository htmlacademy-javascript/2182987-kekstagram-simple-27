import {ImageEffects} from '../common/params.js';

const mainImageWrap = document.querySelector('.img-upload__preview');
const effectsSlider = document.querySelector('.effect-level__slider');
const effectsSliderWrapper = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
let currentEffect = ImageEffects.ORIGINAL;

// Скрытие родителя слайдера
effectsSliderWrapper.classList.add('hidden');

// Инициализация слайдера
noUiSlider.create(effectsSlider, {
  start: ImageEffects.ORIGINAL.max,
  step: ImageEffects.ORIGINAL.step,
  connect: 'lower',
  range: {
    'min': ImageEffects.ORIGINAL.min,
    'max': ImageEffects.ORIGINAL.max
  }
});

// Установка значения для эффекта
const setEffectValue = (style, value, unit = '') => {
  effectLevelValue.value = +value;
  mainImageWrap.style.filter = `${style}(${value}${unit})`;
};

// Изменение глубины эффекта
const onSliderChange = () => {
  setEffectValue(currentEffect.style, effectsSlider.noUiSlider.get(), currentEffect.unit);
};

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

// Прослушка изменения значения в слайдере
effectsSlider.noUiSlider.on('update', onSliderChange);

// Сброс до изначальных значений
const effectReset = () => {
  mainImageWrap.style.filter = 'none';
  effectsSlider.classList.add('hidden');
  effectsSliderWrapper.classList.add('hidden');
  currentEffect = ImageEffects.ORIGINAL;
};

// Изменение эффекта
const onEffectPreviewClick = (evt) => {
  mainImageWrap.classList.remove(`effects__preview--${currentEffect.name}`);
  if(evt === undefined || evt.target.value === 'none') {
    effectReset();
    return;
  }
  currentEffect = ImageEffects[evt.target.value.toUpperCase()];
  effectsSlider.classList.remove('hidden');
  effectsSliderWrapper.classList.remove('hidden');
  mainImageWrap.classList.add(`effects__preview--${currentEffect.name}`);
  updateSlider(currentEffect);
  setEffectValue(currentEffect.style, currentEffect.max, currentEffect.unit);
};

export {onEffectPreviewClick, effectReset};
