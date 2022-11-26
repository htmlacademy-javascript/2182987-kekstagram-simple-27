import {checkStringLengthRange, isEscape, isFileImage} from '../common/utils.js';
import {setEditImgListeners, removeEditImgListeners} from '../styling/image-styling.js';
import {sendForm} from '../api/api.js';
import {CommentsLength} from '../common/params.js';
import {effectReset} from '../styling/effects.js';
import {onZoomSectionClick} from '../styling/scale.js';
import {showErrorModal, showSuccessModal, closeErrorModal, closeSuccessModal} from '../common/messages.js';
import './demo-image.js';

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

  if(!checkStringLengthRange(postCommentInput.value, CommentsLength.MIN, CommentsLength.MAX)) {
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
  form.reset();
  removeEditImgListeners();
  effectReset();
  onZoomSectionClick();
};

// Обработчик нажатия на Esc
const onEscKeydownHandler = (evt) => {
  if(isEscape(evt)) {
    evt.preventDefault();
    const errorModal = document.querySelector('section.error');
    const successModal = document.querySelector('section.success');
    if(errorModal && !successModal) {
      closeErrorModal();
      return;
    } else if(successModal) {
      closeSuccessModal();
      return;
    }
    closeImgEditor();
    document.removeEventListener('keydown', onEscKeydownHandler);
  }
};

// Открытие редактора фото
const showImgEditor = () => {
  body.classList.add('modal-open');
  uploadFormOverlay.classList.remove('hidden');
  closeUploadBtn.addEventListener('click', closeImgEditor);
  document.addEventListener('keydown', onEscKeydownHandler);
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
    document.addEventListener('keydown', onEscKeydownHandler);
    sendForm(evt, () => {
      form.reset();
      closeImgEditor();
      showSuccessModal();
    }, () => {
      showErrorModal();
    }, () => {
      submitBtn.removeAttribute('disabled');
    });
  }
});

// Обработчик события добавления/изменения фото
uploadImgInput.addEventListener('change', () => {
  showImgEditor();
});
