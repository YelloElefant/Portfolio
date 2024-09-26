let titleEle = document.getElementById("title");
let main = document.getElementById("main");
let nav = document.getElementById("nav");
let locationWrapper = document.getElementById("location");
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
        titleNav.style.backgroundColor = "#3636367a";
        titleNav.style.borderBottom = "#21262d solid thin"

        titleEle.style.position = "static"

        for (let i = 1; i < titleNav.children.length; i++) {
            const element = titleNav.children[i];
            element.style.opacity = 1;
        }


    }, 800);



}, 2000)