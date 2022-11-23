const fileInput = document.querySelector('.img-upload__input');
const demoImage = document.querySelector('.img-upload__preview img');

const changeImageHandler = (input, image) => {
  input.addEventListener('change', () => {
    const imgSource = input.files[0];
    image.src = URL.createObjectURL(imgSource);
  });
};

changeImageHandler(fileInput, demoImage);
