let openFeedbackFormElement = document.querySelectorAll('.feedback-form--opened');
let feedbackMenuElement = document.querySelector('.feedback-container');
let closeFeedbackMenuElement = document.querySelector('.feedback-close');
let overlayMenuElement = document.querySelector('.overlay');

for (let i=0; i<openFeedbackFormElement.length; i++) {
  openFeedbackFormElement[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackMenuElement.classList.remove('feedback-container');
    feedbackMenuElement.classList.add('feedback-container--hidden');
    overlayMenuElement.classList.remove('overlay');
    overlayMenuElement.classList.add('overlay--opened');
  })
}

closeFeedbackMenuElement.addEventListener('click', function () {
  feedbackMenuElement.classList.remove('feedback-container--hidden');
  feedbackMenuElement.classList.add('feedback-container');
  overlayMenuElement.classList.remove('overlay--opened');
  overlayMenuElement.classList.add('overlay');
})
