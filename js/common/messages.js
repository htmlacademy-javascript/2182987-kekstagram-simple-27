const body = document.querySelector('body');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorModal = errorTemplate.cloneNode(true);
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successModal = successTemplate.cloneNode(true);

// Кастомная ошибка (тостер-уведомление)
const showError = (error = {message: 'Произошла ошибка. Повторите попытку'}) => {
  const errorBlock = document.createElement('div');
  errorBlock.style.position = 'absolute';
  errorBlock.style.zIndex = '9999';
  errorBlock.style.top = '16px';
  errorBlock.style.left = '16px';
  errorBlock.style.width = '200px';
  errorBlock.style.maxWidth = '100vw';
  errorBlock.style.padding = '8px';
  errorBlock.style.borderRadius = '12px';
  errorBlock.style.fontSize = '12px';
  errorBlock.style.textAlign = 'center';
  errorBlock.style.backgroundColor = '#cb5b5b';
  errorBlock.style.color = '#ffffff';
  errorBlock.style.opacity = '0';
  errorBlock.style.transition = 'opacity 0.4s';
  errorBlock.innerText = error.message;
  setTimeout(() => {
    errorBlock.style.opacity = '1';
  }, 200);
  setTimeout(() => {
    errorBlock.remove();
  }, 2000);
  body.append(errorBlock);
};

// Закрытие неуспешной модали
const onErrorModalClick = (evt) => {
  if(evt === undefined || evt.target.classList.contains('error') || evt.target.classList.contains('error__button')) {
    errorModal.removeEventListener('click', onErrorModalClick);
    errorModal.remove();
  }
};

// Отрытие модали успешной отправки
const showErrorModal = () => {
  errorModal.addEventListener('click', onErrorModalClick);
  body.appendChild(errorModal);
};

// Закрытие модали ошибки при отправке
const onSuccessModalClick = (evt) => {
  if(evt === undefined || evt.target.classList.contains('success') || evt.target.classList.contains('success__button')) {
    successModal.removeEventListener('click', onSuccessModalClick);
    successModal.remove();
  }
};

// Отрытие модали ошибки при отправке
const showSuccessModal = () => {
  successModal.addEventListener('click', onSuccessModalClick);
  body.appendChild(successModal);
};

export {showError, showErrorModal, showSuccessModal, onErrorModalClick, onSuccessModalClick};
