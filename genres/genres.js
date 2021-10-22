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
const arrFavSong = []

let heartIcons = document.querySelectorAll("i")

heartIcons.forEach(element => {
    element.addEventListener("click", function(e) {

        if (element.classList.contains("bi-heart")) { //if the preferred heart is false
            element.classList.remove("bi-heart"); //  we change class of heart
            element.classList.add("bi-heart-fill") // ==========================
            let favSong = this.previousElementSibling; // here we select the favourite song and his content
            let selectedElement = favSong.innerHTML; //==============================================
            arrFavSong.push(selectedElement) // here we add the son at the array of favourite song reay to be show

        } else if (!element.classList.contains("bi-heart")) {
            element.classList.remove("bi-heart-fill"); //if the preferred heart is true
            element.classList.add("bi-heart") //  we change class of heart
            let favSong = this.previousElementSibling; // here we select the favourite song and his content
            let selectedElement = favSong.innerHTML; //==============================================
            let index = arrFavSong.indexOf(selectedElement) // here we check if the song is into the array
            if (index >= 0) { // if it's true
                arrFavSong.splice(index) // we delete the song
            }
        }

    })
}); // end function add event listener