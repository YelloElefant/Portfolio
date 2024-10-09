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
let previouseLines;

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



    

    element.addEventListener("click", async ()=>{
        let descpts = descriptions.querySelectorAll(".typeWrite");
        try {
            previouseLines.top.style.width = "";
            previouseLines.bottom.style.width = "";
        }catch{}

        if (element.getAttribute('data-clicked')) {
            element.removeAttribute('data-clicked')
            interupt();
            undoCoolThing("transperant", 0)
            resetDescriptions(descpts)

            return
        } 
        bottomLine.style.width = "100%"
        topLine.style.width = "100%"

        languages.forEach(e => {e.removeAttribute('data-clicked')})
        element.setAttribute('data-clicked', "true")
        let typeWriterPromise;
        let timeout = 0

        if (previouseClicked != null) {
            interupt();
            makeDescriptionOutline("transperant", 0)
            timeout = 500;
        }
        previouseClicked = inner;
        previouseLines = {
            top: topLine,
            bottom: bottomLine
        }

        setTimeout(async ()=>{
            await doCoolThing(eleColor, 100);
            if (inner.className == "html") { makeDescriptionOutline(colors[1], 100); }
            resetDescriptions(descpts)
            typeWriterPromise = makeTypeWriters(descpts).then(console.log);
        },timeout)
    });
    i++;
})

function resetDescriptions(descpts) {
    descpts.forEach((descpt) => {
        descpt.innerHTML = '';
    })
}

function doCoolThing(color, size) {
    descriptions.style.display = "block";
    descriptions.style.borderLeftColor = color;
    makeDescriptionOutline(color, size)
    return new Promise(r => setTimeout(r, 100));
}

async function undoCoolThing(color, size) {
    descriptions.style.borderLeftColor = color;
    makeDescriptionOutline(color, size)
    await new Promise(r => setTimeout(r, 500));
    descriptions.style.opacity = 0;
    await new Promise(r => setTimeout(r, 100));
    descriptions.style.opacity = 1;
    descriptions.style.display = "none";
            
}



async function makeTypeWriters(x) {
    return new Promise(async (resolve) =>{
        for (let i = 0; i < x.length; i++) {
            const y = x[i];
            let written = await new Promise((resolve) => {
                let current = startTypeWriter(y, () => {
                    resolve("done")
                })
                listOfTypeWriters.push(current)
            }   
            )
            await new Promise(r => setTimeout(r, 100));
            console.log(written)
        }
        resolve("all done")
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