const description = document.querySelector('.description');
const readMoreBtn = document.querySelector('.read-more');

readMoreBtn.addEventListener('click', function() {
  description.classList.toggle('full-description');
  if (description.classList.contains('full-description')) {
    readMoreBtn.innerText = 'Read less';
  } else {
    readMoreBtn.innerText = '...Read more';
  }
});