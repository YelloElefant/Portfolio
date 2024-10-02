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
    let inner = element.children[0];
    inner.style.color = colors[i];
    if(inner.className == "html") {
        i++
        element.children[1].style.color = colors[i];
    }

    element.addEventListener("click", ()=>{
        if (previouseClicked != null) {
            previouseClicked.style.borderBottom = "none";
            previouseClicked.style.borderTop = "none";
        }
        previouseClicked = inner;
        // inner.classList.add("clickedName")
        let eleColor = element.style.color;
        console.log(eleColor);

        inner.style.borderTop = "solid thin " + eleColor;
        inner.style.borderBottom = "solid thin " + eleColor;



    });
    i++;
})


