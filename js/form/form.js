import {checkStringLengthRange, isEscape, isFileImage} from '../common/utils.js';
import {setEditImgListeners, removeEditImgListeners} from '../styling/image-styling.js';
import {sendForm} from '../api/api.js';
import {COMMENT_LENGTHS} from '../common/params.js';
import {effectReset} from '../styling/effects.js';
import {setImageZoom} from '../styling/scale.js';
import {showSubmitError, showSubmitSuccess, closeTemplateError, closeTemplateSuccess} from '../common/messages.js';

const body = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const uploadImgInput = document.querySelector('#upload-file');
const postCommentInput = document.querySelector('.text__description');
const uploadFormOverlay = document.querySelector('.img-upload__overlay');
const closeUploadBtn = document.querySelector('#upload-cancel');
const errorsOutput = document.querySelector('.img-upload__errors-output');
const submitBtn = document.querySelector('.img-upload__submit');

// Получение ошибки формы
const getFormErrors = () => {
  if(!isFileImage(uploadImgInput.value)) {
    return 'Недопустимый формат файла. Вы можете использовать изображения в одном из перечисленных форматов: jpg, jpeg, png, webp';
  }

  if(!checkStringLengthRange(postCommentInput.value, COMMENT_LENGTHS.min, COMMENT_LENGTHS.max)) {
    postCommentInput.classList.add('text__description_error');
    return 'Длина комментария не может быть меньше 20 символов и больше 140 символов';
  }
  postCommentInput.classList.remove('text__description_error');
  return false;
};

// Добавление ошибки
const setErrors = () => {
  errorsOutput.classList.remove('hidden');
  errorsOutput.textContent = getFormErrors();
};

// Удаление ошибки
const removeErrors = () => {
  errorsOutput.classList.add('hidden');
  errorsOutput.textContent = '';
};

// Закрытие редактора фото
const closeImgEditor = () => {
  body.classList.remove('modal-open');
  uploadFormOverlay.classList.add('hidden');
  closeUploadBtn.removeEventListener('click', closeImgEditor);
  document.removeEventListener('keydown', onEscKeydownCloseEditForm);
  form.reset();
  removeEditImgListeners();
  effectReset();
  setImageZoom();
};

// Функция-прослушка события нажания Esc для закрытия формы редактирования
function onEscKeydownCloseEditForm (evt) {
  if(isEscape(evt)) {
    evt.preventDefault();
    closeImgEditor();
  }
}

// Функция-прослушка события нажания Esc для закрытия модали с ошибкой отправки
function onEscKeydownCloseErrorModal (evt) {
  if(isEscape(evt)) {
    evt.preventDefault();
    closeTemplateError();
    document.removeEventListener('keydown', onEscKeydownCloseErrorModal);
    document.addEventListener('keydown', onEscKeydownCloseEditForm);
  }
}

// Функция-прослушка события нажания Esc для закрытия модали с ошибкой отправки
const onEscKeydownCloseSuccessModal = (evt) => {
  if(isEscape(evt)) {
    evt.preventDefault();
    closeTemplateSuccess();
    document.removeEventListener('keydown', onEscKeydownCloseSuccessModal);
  }
};


// Открытие редактора фото
const showImgEditor = () => {
  body.classList.add('modal-open');
  uploadFormOverlay.classList.remove('hidden');
  closeUploadBtn.addEventListener('click', closeImgEditor);
  document.addEventListener('keydown', onEscKeydownCloseEditForm);
  removeErrors();
  setEditImgListeners();
};

// Отправка формы
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if(getFormErrors()) {
    setErrors();
  } else {
    submitBtn.setAttribute('disabled', '');
    removeErrors();
    sendForm(evt, () => {
      form.reset();
      closeImgEditor();
      showSubmitSuccess();
      document.addEventListener('keydown', onEscKeydownCloseSuccessModal);
    }, () => {
      showSubmitError();
      document.removeEventListener('keydown', onEscKeydownCloseEditForm);
      document.addEventListener('keydown', onEscKeydownCloseErrorModal);
    }, () => {
      submitBtn.removeAttribute('disabled');
    });
  }
});

// Обработчик события добавления/изменения фото
uploadImgInput.addEventListener('change', () => {
  showImgEditor();
});
