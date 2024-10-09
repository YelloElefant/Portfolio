let languages = document.querySelectorAll(".languageName");
let descriptions = document.getElementById("languageDescriptions")
let previouseClicked = null;
let currentEl = null;
const left = document.querySelector('#rectleft');
const right = document.querySelector('#rectright');

// for (let i = 1; i < descriptions.children.length; i++) {
//     const element = descriptions.children[i];
//     element.style.display = "none";
// }
descriptions.style.display = "none"

console.log(languages);
const colors = ["#f06529", " #2965f1", "#f7df1e", "white", "#f89820", "green", "#68ff00", "#0092e6", "#8892bf"]

let listOfTypeWriters = [];

// html  #e34c26, css #264de4 

let i = 0;
languages.forEach(element => {
    let eleColor = colors[i];
    let inner = element.children[1];
    let topLine = element.children[0]
    let bottomLine = element.children[2]

    if(inner.className == "html") {
        console.log(inner)
        inner.children[0].style.color = eleColor;
        i++;
        inner.children[1].style.color = colors[i];
        bottomLine.style.backgroundColor = colors[i];
    } else {
        inner.style.color = eleColor;
        bottomLine.style.backgroundColor = eleColor;
    }
    topLine.style.backgroundColor = eleColor;



    

    element.addEventListener("click", ()=>{
        let timeout = 0
        if (previouseClicked != null) {
            interupt();
            previouseClicked.style.borderBottom = "none";
            previouseClicked.style.borderTop = "none";
            makeDescriptionOutline("transperant", 0)
            timeout = 500;
        }
        previouseClicked = inner;
        // inner.classList.add("clickedName")
        setTimeout(()=>{
            currentEl = element;
            descriptions.style.display = "block";
            descriptions.style.borderLeftColor = eleColor;
            let descpts = descriptions.querySelectorAll(".typeWrite");
            descpts.forEach((descpt) => {
                descpt.innerHTML = '';
            })
            makeDescriptionOutline(eleColor, 100);
            makeTypeWriters(descpts);

        },timeout)
    });
    i++;
})

function makeTypeWriters(x) {
    x.forEach((y)=>{
        listOfTypeWriters.push(startTypeWriter(y))
    })
}

function interupt() {
    listOfTypeWriters.forEach((x)=> {
        x.exit = true;
    })
    listOfTypeWriters = [];
}

function makeDescriptionOutline(color, size) {
    let lines = descriptions.querySelectorAll(".descLine");
    lines.forEach((line) => {
        line.style.backgroundColor = color
        setTimeout(()=>{
            line.style.width = size + "%";
            descriptions.style.borderRightColor = color;
        }, 100)

    })
}