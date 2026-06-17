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