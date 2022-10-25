import {isEscape} from './utils.js';

const body = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const uploadImgInput = document.querySelector('#upload-file');
const uploadFormOverlay = document.querySelector('.img-upload__overlay');
const closeUploadBtn = document.querySelector('#upload-cancel');

// Функция-прослушка события нажания Esc
const onEscKeydown = (evt) => {
  if(isEscape(evt)) {
    evt.preventDefault();
    closeImgEditor();
  }
};

// Открытие редактора фото
function showImgEditor () {
  body.classList.add('modal-open');
  uploadFormOverlay.classList.remove('hidden');
  closeUploadBtn.addEventListener('click', closeImgEditor);
  document.addEventListener('keydown', onEscKeydown);
}

// Закрытие редактора фото
function closeImgEditor () {
  body.classList.remove('modal-open');
  uploadFormOverlay.classList.add('hidden');
  closeUploadBtn.removeEventListener('click', closeImgEditor);
  document.removeEventListener('keydown', onEscKeydown);
  form.reset();
}

// Обработчик события добавления/изменения фото
uploadImgInput.addEventListener('change', () => {
  showImgEditor();
});
