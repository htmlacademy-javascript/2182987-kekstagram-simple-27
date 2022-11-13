const getPosts = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts);
    });
};

export {getPosts};
