const body = document.querySelector('body');

function showError(error = {message: 'Произошла ошибка. Повторите попытку'}) {
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
}

function showSubmitError() {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorModal = errorTemplate.cloneNode(true);

  function closeTemplateError(evt) {
    if(evt.target.classList.contains('error') || evt.target.classList.contains('error__button')) {
      errorModal.removeEventListener('click', closeTemplateError);
      errorModal.remove();
    }
  }
  errorModal.addEventListener('click', closeTemplateError);
  body.appendChild(errorModal);
}

function showSubmitSuccess() {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successModal = successTemplate.cloneNode(true);

  function closeTemplateSuccess(evt) {
    if(evt.target.classList.contains('success') || evt.target.classList.contains('success__button')) {
      successModal.removeEventListener('click', closeTemplateSuccess);
      successModal.remove();
    }
  }
  successModal.addEventListener('click', closeTemplateSuccess);
  body.appendChild(successModal);
}

export {showError, showSubmitError, showSubmitSuccess};
