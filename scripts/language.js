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
        currentEl = element;
        descriptions.style.display = "block";
        descriptions.style.borderColor = eleColor;
        let descpt = descriptions.children[0]
        startTypeWriter(descpt);
        

        

    });
    i++;
})


function setUpPath() {
	let x = (currentEl.offsetLeft + currentEl.clientWidth / 2);

	x -= 20;
	let h = window.innerHeight - left.parentElement.getBoundingClientRect().y - 20;
	let x2 = window.innerWidth - x - 40;

	// Create svg paths
	left.setAttribute('d', `M ${x + 2},0
							C 100,0 40,0 40,0
							40,0 0,0 0,40
							0,40 0,60 0,${h - 40}
							0,${h - 40} 0,${h} 40,${h}
							93.75,${h} 100,${h} ${x2},${h}`);
	right.setAttribute('d', `M -2,0
							 C -2,0 ${x2 - 40},0 ${x2 - 40},0
							 ${x2 - 40},0 ${x2},0 ${x2},40
							 ${x2},40 ${x2},60 ${x2},${h - 40}
							 ${x2},${h - 40} ${x2},${h} ${x2 - 40},${h}
							 ${x2 - x + 40},${h} ${x2 - x},${h} ${x2 - x},${h}`);
	right.style.transform = `translateX(${x + 1}px) translateY(1px)`;
	// Reset everything
	let len = left.getTotalLength();
	left.style.transition = 'initial';
	left.style.strokeDasharray = len;
	right.style.transition = 'initial';
	right.style.strokeDasharray = len;

}

function doPath(color) {
	left.style.stroke = color;
	right.style.stroke = color;

	// Do animation
	left.style.transition = 'stroke-dashoffset .75s ease-in-out';
	right.style.transition = 'stroke-dashoffset .75s ease-in-out';
	left.style.strokeDashoffset = '0';
	right.style.strokeDashoffset = '0';
}