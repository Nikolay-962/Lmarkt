
"use strict"

const deckriptionBtn = document.getElementById('deck');
const reviewBtn = document.getElementById('review');
const commentBtn = document.getElementById('comment');
const showDeckription = document.querySelector('.description__text-desc');
const showReview = document.querySelector('.reviews');
const showComments = document.querySelector('.comment');

deckriptionBtn.addEventListener('click', () => {
  if (deckriptionBtn.classList.contains('description__btn--active')) {
    deckriptionBtn.classList.remove('description__btn--active');
  } else {
    deckriptionBtn.classList.add('description__btn--active');
    reviewBtn.classList.remove('description__btn--active');
    commentBtn.classList.remove('description__btn--active');
    showDeckription.classList.add('active');
    showReview.classList.remove('active');
    showComments.classList.remove('active');
  }
});
reviewBtn.addEventListener('click', () => {
  if (reviewBtn.classList.contains('description__btn--active')) {
    reviewBtn.classList.remove('description__btn--active');
  } else {
    reviewBtn.classList.add('description__btn--active');
    deckriptionBtn.classList.remove('description__btn--active');
    commentBtn.classList.remove('description__btn--active');
    showReview.classList.add('active');
    showDeckription.classList.remove('active');
    showComments.classList.remove('active');
  }
})
commentBtn.addEventListener('click', () => {
  if (commentBtn.classList.contains('description__btn--active')) {
    commentBtn.classList.remove('description__btn--active');
  } else {
    commentBtn.classList.add('description__btn--active');
    reviewBtn.classList.remove('description__btn--active');
    deckriptionBtn.classList.remove('description__btn--active');
    showComments.classList.add('active');
    showDeckription.classList.remove('active');
    showReview.classList.remove('active');
  }
})

