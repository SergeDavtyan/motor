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




// ------ Navbar fix

let nav = document.querySelector("nav");
let logo_default = document.querySelector(".logo-default");
let logo_black = document.querySelector(".logo-black");
let menu_items = document.querySelectorAll(".menu__item a");


window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
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


// ---- Burger Menu

let burger = document.querySelector(".burger");
let burger_item = document.querySelector(".burger-item");
let burger_menu = document.querySelector(".burger-menu");



burger_menu.addEventListener("click", () => {
    burger_menu.classList.remove("active");
})

burger.addEventListener("click", () => {
    burger_menu.classList.toggle("active");
})

document.addEventListener("click", (e) => {
    if (e.target.className !== burger_menu.className && e.target.className !== burger.className && e.target.className !== burger_item.className) {
        burger_menu.classList.remove("active");
    }
})


// ----- Modal

let call_back = document.querySelectorAll(".call-back");
let modal = document.querySelector(".modal");
let call_input = document.querySelector(".call-input");
let call_btn = document.querySelector(".call-btn");

for (let i = 0; i < call_back.length; i++) {
    call_back[i].addEventListener("click", () => {
        modal.classList.add("active");
    })
}

modal.addEventListener("click", (e) => {

    if (e.target.className !== call_input.className && e.target.className !== call_btn.className) {
        modal.classList.remove("active");
    }

})


// ---- Input Number

let call_val = true;
const Number_Only = evt => {
    let ch = String.fromCharCode(evt.which);

    if (!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }
}


call_input.addEventListener("input", () => {

    if (call_val) {
        call_input.value = '+7' + call_input.value
    }
    call_val = false
    if (call_input.value.length == 0) {
        call_val = true
    }

})