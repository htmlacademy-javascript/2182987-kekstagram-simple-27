import {setImageZoom} from './scale.js';
import {changeEffect} from './effects.js';

const scaleControls = document.querySelector('.img-upload__scale');
const effectsList = document.querySelector('.effects__list');


// Добавление прослушки кнопок масштабирования и изменения эффекта
function setEditImgListeners () {
  scaleControls.addEventListener('click', setImageZoom, false);
  effectsList.addEventListener('change', changeEffect, false);
}

// Удаление прослушки кнопок масштабирования и изменения эффекта
function removeEditImgListeners () {
  scaleControls.removeEventListener('click', setImageZoom);
  effectsList.removeEventListener('change', changeEffect);
}

export {setEditImgListeners, removeEditImgListeners};
