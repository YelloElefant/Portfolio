let titleEle = document.getElementById("title");
let main = document.getElementById("main");
let nav = document.getElementById("nav");
let html = document.getElementsByTagName("html")
let titleNav = document.getElementById("titleNavWrapper")

// titleNav.style.height = html.style.height;

main.style.opacity = 0;
// nav.style.opacity = 0;



// titleEle.style.transform = "translateX(-50%) translateY(-50%) scale(2, 2)"

setTimeout(() => {
    titleEle.classList.add("top")

    nav.style.transition = "transition: 1s ease"

    /* position: static; */
    setTimeout(() => {
        titleEle.style.position = "static"
        nav.style.opacity = 1;
        main.style.opacity = 1;

    }, 800);



}, 2000)



