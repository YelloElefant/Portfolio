let languages = document.querySelectorAll(".languageName");
let descriptions = document.getElementById("languageDescriptions")
let previouseClicked = null;

for (let i = 0; i < descriptions.children.length; i++) {
    const element = descriptions.children[i];
    element.style.display = "none";
}

console.log(languages);
const colors = ["#f06529", " #2965f1", "#f7df1e", "white", "#f89820", "green", "#68ff00", "#0092e6", "#8892bf"]

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
        if (previouseClicked != null) {
            previouseClicked.style.borderBottom = "none";
            previouseClicked.style.borderTop = "none";
        }
        previouseClicked = inner;
        // inner.classList.add("clickedName")
        let eleColor = element.style.color;
        console.log(eleColor);

        // inner.style.borderTop = "solid thin " + eleColor;
        // inner.style.borderBottom = "solid thin " + eleColor;



    });
    i++;
})


