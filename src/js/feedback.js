let openFeedbackFormElement = document.querySelectorAll('.feedback-form--opened');
let feedbackMenuElement = document.querySelector('.feedback-container');
let closeFeedbackMenuElement = document.querySelector('.feedback-close');

for (let i=0; i<openFeedbackFormElement.length; i++) {
  openFeedbackFormElement[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackMenuElement.classList.remove('feedback-container');
    feedbackMenuElement.classList.add('feedback-container--hidden');
  })
}

closeFeedbackMenuElement.addEventListener('click', function () {
  feedbackMenuElement.classList.remove('feedback-container--hidden');
  feedbackMenuElement.classList.add('feedback-container');
})