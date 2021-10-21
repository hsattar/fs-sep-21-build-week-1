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
const songs = [{
        id: "r01",
        genre: "Rock",
        artist: "Pink Floyd",
        albumTitle: "Dark Side of the Moon",
        song: "Money"
    },
    {
        id: "r02",
        genre: "Rock",
        artist: "Pink Floyd",
        albumTitle: "Dark Side of the Moon",
        song: "On the Run"
    },
    {
        id: "r03",
        genre: "Rock",
        artist: "Pink Floyd",
        albumTitle: "Dark Side of the Moon",
        song: "Time"
    },
    {
        id: "r04",
        genre: "Rock",
        artist: "Pink Floyd",
        albumTitle: "Dark Side of the Moon",
        song: "Eclipse"
    },
    {
        id: "r05",
        genre: "Rock",
        artist: "Pink Floyd",
        albumTitle: "Dark Side of the Moon",
        song: "The great Gig in the Sky"
    },



];
const arrFavSong = []

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
let heartIcons = document.querySelectorAll("i")
let classActive = heartIcons[].classList.contains("bi-heart")

let addFavouritTotheList = function(element) {
    if (classActive) { //if the preferred heart is false
        element.classList.remove("bi-heart"); //  we change class of heart
        element.classList.add("bi-heart-fill") // ==========================
        let favSong = this.previousElementSibling; // here we select the favourite song and his content
        let selectedElement = favSong.innerHTML; //==============================================
        element.push(selectedElement) // here we add the son at the array of favourite song reay to be show
        console.log(arrFavSong) // ===========================================
    } else if (!classActive) {
        element.classList.remove("bi-heart-fill"); //if the preferred heart is true
        element.classList.add("bi-heart") //  we change class of heart
        let favSong = this.previousElementSibling; // here we select the favourite song and his content
        let selectedElement = favSong.innerHTML; //==============================================
        let index = arrFavSong.indexOf(selectedElement) // here we check if the song is into the array
        if (index >= 0) { // if it's true
            arrFavSong.splice(index) // we delete the song
        }

    }
}

for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", addFavouritTotheList(heartIcons))
}



/* for (const element of heartIcons) {
    let classActive = heartIcons.classList.contains("bi-heart")


} */


/* let addFavouritTotheList = function() {

    let classActive = heartIcons.classList.contains("bi-heart")
    if (classActive) { //if the preferred heart is false
        heartIcons.classList.remove("bi-heart"); //  we change class of heart
        heartIcons.classList.add("bi-heart-fill") // ==========================
        let favSong = this.previousElementSibling; // here we select the favourite song and his content
        let selectedElement = favSong.innerHTML; //==============================================
        arrFavSong.push(selectedElement) // here we add the son at the array of favourite song reay to be show
        console.log(arrFavSong) // ===========================================
    } else if (!classActive) {
        heartIcons.classList.remove("bi-heart-fill"); //if the preferred heart is true
        heartIcons.classList.add("bi-heart") //  we change class of heart
        let favSong = this.previousElementSibling; // here we select the favourite song and his content
        let selectedElement = favSong.innerHTML; //==============================================
        let index = arrFavSong.indexOf(selectedElement) // here we check if the song is into the array
        if (index >= 0) { // if it's true
            arrFavSong.splice(index) // we delete the song
        }
        console.log(arrFavSong)
    }
} */