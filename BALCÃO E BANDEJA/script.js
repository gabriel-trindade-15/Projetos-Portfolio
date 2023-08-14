window.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;
    var slideInterval;
  
    function showSlide(slideIndex) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }
  
      slides[slideIndex].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    function playSlideshow() {
      slideInterval = setInterval(nextSlide, 3000); // Altere o intervalo de troca de slides aqui (em milissegundos)
    }
  
    function pauseSlideshow() {
      clearInterval(slideInterval);
    }
  
    showSlide(currentSlide);
    playSlideshow();
  
    var prevBtn = document.querySelector('.prev-btn');
    var nextBtn = document.querySelector('.next-btn');
    var playBtn = document.querySelector('.play-btn');
    var pauseBtn = document.querySelector('.pause-btn');
  
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    playBtn.addEventListener('click', playSlideshow);
    pauseBtn.addEventListener('click', pauseSlideshow);
  });
  
  function voltarAoTopo() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
