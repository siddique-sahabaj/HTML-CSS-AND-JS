// Changing nav bar style according to scroll

window.addEventListener("scroll", ()=>{
    document.querySelector("nav").classList.toggle('window-scroll', window.scrollY > 0)
})

//Adding the faq toggle functionality

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('show')

        const icon = faq.querySelector(".faq_icon i")
        icon.classList.toggle('uil-plus')
        icon.classList.toggle('uil-minus')
    })
})


// Toggle nav menu
const menu = document.querySelector(".nav_menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

menuBtn.addEventListener("click", ()=>{
    menu.style.display = "flex";

    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
})

closeBtn.addEventListener("click", ()=>{
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
})

