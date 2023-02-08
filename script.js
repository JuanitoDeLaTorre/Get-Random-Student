const butt = document.querySelector(".getRandom");
const box = document.querySelector(".resultsBox")

let students = ["Ahmad","Brandon","Jonathan","John","Ali","Sean","David","Luke","Leo","Joshua","Wylie"]

function fillRandom() {
    let randNum = Math.floor(Math.random() * students.length)
    box.innerText = students[randNum]
}