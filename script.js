// const menuOpenButton = document.querySelector("#menu-open-button");

// const menuCloseButton = document.querySelector("#menu-close-button");

// menuOpenButton.addEventListener("click", ()=>{
// document.body.classList.toggle("show-mobile-menu")
// })

// menuCloseButton.addEventListener("click", ()=>
//     menuOpenButton.click() );





//     const menuOpenButton = document.querySelector("#menu-open-button");
// const menuCloseButton = document.querySelector("#menu-close-button");
// const navMenu = document.querySelector(".nav-menu");

// menuOpenButton.addEventListener("click", () => {
//     console.log("Click");
//     navMenu.classList.toggle("show-mobile-menu"); // Toggle the menu visibility
// });

// menuCloseButton.addEventListener("click", () => {
//     navMenu.classList.remove("show-mobile-menu"); // Close the menu when close button is clicked
// });



const navbarLinks = document.querySelectorAll(".nav-link");
const navMenu = document.querySelector(".nav-menu");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click", ()=>{
    console.log("CLick")
    navMenu.classList.toggle("show-mobile-menu")
    })
    menuCloseButton.addEventListener("click", ()=>
            menuOpenButton.click() );

    navbarLinks.forEach((link) => {
        link.addEventListener("click", () => menuCloseButton.click());
      });





/* Initializing Swiper */
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

   // Autoplay settings
   autoplay: {
    delay: 1600, // 3 seconds delay between slides
    disableOnInteraction: false, // Continue autoplay after user interaction
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});