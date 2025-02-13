const menuOpenButton = document.querySelector("#menu-open-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuCloseButton = document.querySelector("#menu-close-button");
//open menu
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});
//close menu
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
//close menu when button on menu is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});
//initailise swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        }, 
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }

    }
  });