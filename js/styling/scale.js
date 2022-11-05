import {ZOOM_RANGE} from '../params.js';
import {setValue} from '../utils.js';

const zoomValue = document.querySelector('.scale__control--value');
const mainImage = document.querySelector('.img-upload__preview img');

// Масштабирование изображения
function setImageZoom (evt) {
  if(evt.target.classList.contains('scale__control--bigger') && parseInt(zoomValue.value, 10) <= ZOOM_RANGE.max - ZOOM_RANGE.step) {
    setValue(zoomValue, `${parseInt(zoomValue.value, 10) + ZOOM_RANGE.step}%`);
  }
  if(evt.target.classList.contains('scale__control--smaller') && parseInt(zoomValue.value, 10) > ZOOM_RANGE.min) {
    setValue(zoomValue, `${parseInt(zoomValue.value, 10) - ZOOM_RANGE.step}%`);
  }
  mainImage.style.transform = `scale(${parseInt(zoomValue.value, 10) / 100})`;
}

export {setImageZoom};
