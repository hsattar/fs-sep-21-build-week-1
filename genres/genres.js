let btnRock = document.getElementById("rock")
let btnUnderground = document.getElementById("underground")
let btnREB = document.getElementById("r&b")
let btnJazz = document.getElementById("jazz")
let btnModern = document.getElementById("modern")

let rockSection = document.getElementById("rockStyle")
let underSection = document.getElementById("undergroundStyle")
let rebSection = document.getElementById("rebStyle")
let jazzSection = document.getElementById("jazzStyle")
let modernSection = document.getElementById("modernStyle")

btnRock.addEventListener("click", function() {
    rockSection.classList.toggle("displaynone")

})
btnREB.addEventListener("click", function() {
    rebSection.classList.toggle("displaynone")

})
btnUnderground.addEventListener("click", function() {
    underSection.classList.toggle("displaynone")

})
btnJazz.addEventListener("click", function() {
    jazzSection.classList.toggle("displaynone")

})
btnModern.addEventListener("click", function() {
    modernSection.classList.toggle("displaynone")

})

// == select song as favourite

let heartIcons = document.getElementById("firstHeart")

heartIcons.addEventListener("click", function(e) {
    let classActive = heartIcons.classList.contains("bi-heart")
    if (classActive) {
        heartIcons.classList.remove("bi-heart");
        heartIcons.classList.add("bi-heart-fill")

    } else if (!classActive) {
        heartIcons.classList.remove("bi-heart-fill");
        heartIcons.classList.add("bi-heart")
    }



})