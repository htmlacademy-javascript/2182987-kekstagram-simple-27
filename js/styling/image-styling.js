import {onZoomSectionClick} from './scale.js';
import {onChangeEffect} from './effects.js';

const scaleControls = document.querySelector('.img-upload__scale');
const effectsList = document.querySelector('.effects__list');

// Добавление прослушки кнопок масштабирования и изменения эффекта
const setEditImgListeners = () => {
  scaleControls.addEventListener('click', onZoomSectionClick, false);
  effectsList.addEventListener('change', onChangeEffect, false);
};

// Удаление прослушки кнопок масштабирования и изменения эффекта
const removeEditImgListeners = () => {
  scaleControls.removeEventListener('click', onZoomSectionClick);
  effectsList.removeEventListener('change', onChangeEffect);
};

export {setEditImgListeners, removeEditImgListeners};
