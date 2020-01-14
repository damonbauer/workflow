const appendSlideCounter = () => {
  const PRESENTATION_CONTAINER = document.body.querySelector('.presentation-container');
  const TOTAL_SLIDES = PRESENTATION_CONTAINER.querySelectorAll('.slide-container');
  const TOTAL_SLIDES_TO_DISPLAY = TOTAL_SLIDES.length - 1;
  
  const SLIDE_NUMBER_CONTAINER = document.createElement('div');
  SLIDE_NUMBER_CONTAINER.id = 'slide_number_container';
  SLIDE_NUMBER_CONTAINER.innerHTML = `<span id="slide_number">0</span>/${TOTAL_SLIDES_TO_DISPLAY}`;

  PRESENTATION_CONTAINER.insertAdjacentElement('afterend', SLIDE_NUMBER_CONTAINER);
};

const updateCurrentSlideNumber = () => {
  const SLIDE_NUMBER = window.location.hash.replace('#', '');
  const SLIDE_NUMBER_ELEMENT = document.getElementById('slide_number');

  SLIDE_NUMBER_ELEMENT.innerText = SLIDE_NUMBER;
}

const setupAfterBigReady = () => {
  appendSlideCounter();
  updateCurrentSlideNumber();
};

document.addEventListener('DOMContentLoaded', () => {
  let isBigReadyCheck = null;

  isBigReadyCheck = window.setInterval(() => {
    if (typeof window.big !== 'undefined') {
      setupAfterBigReady();
      clearInterval(isBigReadyCheck);
    }
  }, 10);
});

window.addEventListener('hashchange', updateCurrentSlideNumber);
