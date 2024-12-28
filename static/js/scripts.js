document.addEventListener('DOMContentLoaded', () => {
    console.log('Winstrike Ufa website is up and running!');
});
document.querySelectorAll('.btn-scroll').forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
const swiper = new Swiper(".swiper", {
  speed: 750,
  parallax: true,
  autoplay: false,
  mousewheel: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});