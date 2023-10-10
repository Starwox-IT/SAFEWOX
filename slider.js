const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 40,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    direction: 'horizontal',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
        delay: 3000, // 3 seconds delay between slides
        disableOnInteraction: false, // Set to true to stop autoplay when user interacts with the slider
    },
    loop: true,
    speed: 600,
    
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        656: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });