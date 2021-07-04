$('.about-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        }
    }
});

$('.feedback-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})



let nav = document.querySelector("nav");
let logo_default = document.querySelector(".logo-default");
let logo_black = document.querySelector(".logo-black");
let menu_items = document.querySelectorAll(".menu__item a");


window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        logo_default.classList.remove("active");
        logo_black.classList.add("active");
        nav.classList.add("active");

        for (let i = 0; i < menu_items.length; i++) {
            menu_items[i].classList.add("active");
        }

    } else {
        logo_default.classList.add("active");
        logo_black.classList.remove("active");
        nav.classList.remove("active");

        for (let i = 0; i < menu_items.length; i++) {
            menu_items[i].classList.remove("active");
        }
    }
})


let burger = document.querySelector(".burger");
let burger_menu = document.querySelector(".burger-menu");



burger_menu.addEventListener("click", () => {
    burger_menu.classList.remove("active");
})

burger.addEventListener("click", () => {
    burger_menu.classList.toggle("active");
})