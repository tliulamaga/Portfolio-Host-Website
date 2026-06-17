
// Scroll Function
function revealSections() {
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        if (position < window.innerHeight - 150) {
            element.classList.add('show');
        }
    });
}
// Run once when page loads
window.addEventListener('load', revealSections);

// Run again while scrolling
window.addEventListener('scroll', revealSections);

// Animation
anime({
  targets: '.hero-title',
  translateY: [50,0],
  opacity: [0,1],
  duration: 1000,
  easing: 'easeOutExpo'
});

anime({
  targets: '.hero-subtitle',
  translateY: [30,0],
  opacity: [0,1],
  delay: 200,
  duration: 1000
});

anime({
  targets: '.hero-buttons',
  translateY: [20,0],
  opacity: [0,1],
  delay: 400,
  duration: 1000
});

anime({
  targets: '.hero-image',
  scale: [0.9,1],
  opacity: [0,1],
  delay: 300,
  duration: 1200
});
