import {getPosts} from './api/api.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');

getPosts((posts) => {
  posts.forEach((post) => {
    const thumbnail = pictureTemplate.cloneNode(true);

    thumbnail.querySelector('.picture__img').src = post.url;
    thumbnail.querySelector('.picture__comments').innerText = post.comments;
    thumbnail.querySelector('.picture__likes').innerText = post.likes;
    pictures.appendChild(thumbnail);
  });
});


