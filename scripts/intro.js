let titleEle = document.getElementById("title");
let main = document.getElementById("main");
let titleNav = document.getElementById("titleNavWrapper")
let nav = document.getElementById("ageWrapper")

main.style.opacity = 0;

changeOp(0)

setTimeout(() => {
    titleEle.classList.add("top")

    nav.style.transition = "transition: 1s ease"

    /* position: static; */
    setTimeout(() => {
        titleNav.style.backgroundColor = "#3636367a";
        titleNav.style.borderBottom = "#21262d solid thin"

        titleEle.style.position = "static"
        main.style.opacity = 1;

        changeOp(1)


    }, 800);



}, 2000)

function changeOp(x) {
    for (let i = 1; i < titleNav.children.length; i++) {
        const element = titleNav.children[i];
        element.style.opacity = x;
    }
}