import {showError, showSubmitError, showSubmitSuccess} from '../messages.js';

const getPosts = (onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendForm = (evt, onSuccess) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        showSubmitSuccess();
        onSuccess();
      } else {
        throw new Error('Ошибка отравки данных');
      }
    })
    .catch(() => {
      showSubmitError();
    });
};

export {getPosts, showError, sendForm};
