document.querySelectorAll('.workflow-carousel').forEach(carousel => {
  const trackContainer = carousel.querySelector('.carousel-track-container');
  const prevBtn = carousel.querySelector('.carousel-btn.prev');
  const nextBtn = carousel.querySelector('.carousel-btn.next');

  // Mueve un “viewport” hacia atrás o adelante
  prevBtn.addEventListener('click', () => {
    trackContainer.scrollBy({
      left: -trackContainer.clientWidth,
      behavior: 'smooth'
    });
  });
  nextBtn.addEventListener('click', () => {
    trackContainer.scrollBy({
      left: trackContainer.clientWidth,
      behavior: 'smooth'
    });
  });
});