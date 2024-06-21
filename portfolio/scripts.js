document.addEventListener("DOMContentLoaded", function () {
  const hambIcon = document.querySelector(".hamb__icon");
  const menu = document.querySelector(".menu");

  hambIcon.addEventListener("click", function () {
    hambIcon.classList.toggle("open");
    if (menu.style.display === "none" || !menu.style.display) {
      menu.style.display = "flex";
      menu.classList.add('animate-menu');// 添加动画类
    } else {
      menu.classList.remove('animate-menu'); // 移除动画类
      menu.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const worksImages = document.querySelectorAll('.works-image');
  const popup = document.querySelector('.popup');
  const popupImg = popup.querySelector('img');

  worksImages.forEach(image => {
      const img = image.querySelector('img');

      img.addEventListener('click', function() {
          const src = this.getAttribute('src');
          popupImg.setAttribute('src', src);
          popup.classList.add('active');
      });
  });

  popup.addEventListener('click', function() {
      this.classList.remove('active');
  });

  
});

document.addEventListener("DOMContentLoaded", function() {
  const menuLinks = document.querySelectorAll('.header-nav-item a');

  menuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});