const images = document.querySelectorAll('.slideshow-container img');
let currentIndex = 0;

function showSlide() {
  images[currentIndex].style.display = 'block';

  if (currentIndex > 0) {
    images[currentIndex - 1].style.display = 'none';
  }

  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(showSlide, 3000); 




document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});



