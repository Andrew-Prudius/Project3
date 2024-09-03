var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: -46,

    pagination: {
      el: ".swiper-pagination",
    },

    slidesPerView: 'auto'

  });


  const buttonOpen = document.querySelector('#button-open');
  const buttonClose = document.querySelector('#button-close');
  const allBrandsList = document.querySelector('.all-brands__list');


  buttonOpen.addEventListener('click', function () {
    allBrandsList.classList.add("screenClose");
    buttonOpen.style.display = "none";
    buttonClose.style.display = "flex";
  });


  buttonClose.addEventListener('click', function () {
    allBrandsList.classList.remove("screenClose");
    buttonClose.style.display = "none";
    buttonOpen.style.display = "flex";
    
  });



  





  

