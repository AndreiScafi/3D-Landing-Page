const boxes = document.querySelectorAll(".box");
const heading = document.querySelector(".heading span");
const btn = document.querySelector(".btn");

const colors = [
    "#efd81d",
    "#61dbfb",
    "#41b883",
    "#b52e31",
    "#43853d",
    "#cf649a",
    "#e04e39"
]

const techs = [
    "JS",
    "React",
    "Vue",
    "Angular",
    "Node",
    "Sass",
    "Ember"
]

let current = 1;

const textStyle = () => {
    heading.style.color = colors[current - 1];
    heading.textContent = techs[current - 1];
    btn.style.backgroundColor = colors[current - 1];
    btn.firstElementChild.textContent = techs[current - 1];
}

let interval = setInterval(() => {
    boxes.forEach((box, index) => {
        if (current > boxes.length) current = 1;

        if (index + 1 === current) {
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    })
    textStyle()
    current++;
}, 5000);

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {

        const activeBox = document.querySelector('.box.active');

        boxes.forEach((cube) => {
            cube.classList.remove('active')
        })


        if (box !== activeBox) {
            box.classList.add('active');
            current = index + 1;
            /* current = box.classList[1].split("-")[1] * 1;*/
            clearInterval(interval);
            textStyle();
        }
    })
})


