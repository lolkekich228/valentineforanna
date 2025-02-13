function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Устанавливаем случайное положение по горизонтали
    heart.style.left = Math.random() * window.innerWidth + 'px';
    // Устанавливаем начальное положение сверху экрана
    heart.style.top = '-20px';
    
    // Добавляем сердце на страницу
    document.body.appendChild(heart);
    
    // Анимация падения
    setTimeout(() => {
        heart.style.transition = 'top 2s linear, opacity 2s linear';
        heart.style.top = `${window.innerHeight}px`; // Падение вниз
        heart.style.opacity = '0'; // Постепенное исчезновение
        
        // Удаляем сердце после анимации
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }, 50); // Небольшая задержка перед началом анимации
}

// Создаем сердца каждые 500 миллисекунд

setInterval(createHeart, 500);
const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sliderContainer.children.length;
  updateSlider();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderContainer.children.length) % sliderContainer.children.length;
  updateSlider();
});

function updateSlider() {
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
document.getElementById('showImageText').addEventListener('click', function() {
    document.getElementById('imageTextPopup').style.display = 'block';
  });
  
  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('imageTextPopup').style.display = 'none';
  });

