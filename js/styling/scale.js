import {zoomRange} from '../common/params.js';
import {setValue} from '../common/utils.js';

const zoomValue = document.querySelector('.scale__control--value');
const mainImage = document.querySelector('.img-upload__preview img');

// Масштабирование изображения
const setImageZoom = (evt) => {
  if(evt === undefined) {
    setValue(zoomValue, `${zoomRange.MAX}%`);
    mainImage.style.transform = `scale(${parseInt(zoomValue.value, 10) / 100})`;
    return;
  }
  if(evt.target.classList.contains('scale__control--bigger') && parseInt(zoomValue.value, 10) <= zoomRange.MAX - zoomRange.STEP) {
    setValue(zoomValue, `${parseInt(zoomValue.value, 10) + zoomRange.STEP}%`);
  }
  if(evt.target.classList.contains('scale__control--smaller') && parseInt(zoomValue.value, 10) > zoomRange.MIN) {
    setValue(zoomValue, `${parseInt(zoomValue.value, 10) - zoomRange.STEP}%`);
  }
  mainImage.style.transform = `scale(${parseInt(zoomValue.value, 10) / 100})`;
};

export {setImageZoom};
