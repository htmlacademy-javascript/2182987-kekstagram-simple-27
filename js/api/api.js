// Получение списка постов с сервера
const getPosts = (onSuccess, onError) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка получения данных');
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((err) => {
      onError(err);
    });
};

// Отправка формы на сервер
const sendForm = (evt, onSuccess, onError, cb) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: formData
    },
  )
    .then((response) => {
      cb();
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error('Ошибка отравки данных');
      }
    })
    .catch(() => {
      onError();
    });
};

export {getPosts, sendForm};
