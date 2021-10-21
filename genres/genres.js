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


heartIcons.addEventListener("click", function(e) {
        heartIcons.forEach(element => {
                if (heartIcons.classList.contains("bi-heart")) { //if the preferred heart is false
                    heartIcons.classList.remove("bi-heart"); //  we change class of heart
                    heartIcons.classList.add("bi-heart-fill") // ==========================




                } else if (!heartIcons.classList.contains("bi-heart")) {
                    heartIcons.classList.remove("bi-heart-fill"); //if the preferred heart is true
                    heartIcons.classList.add("bi-heart") //  we change class of heart
                    let favSong = this.previousElementSibling; // here we select the favourite song and his content
                    let selectedElement = favSong.innerHTML; //==============================================
                    let index = arrFavSong.indexOf(selectedElement) // here we check if the song is into the array
                    if (index >= 0) { // if it's true
                        arrFavSong.splice(index) // we delete the song

                    }


                });




        }) // end function add event listener




    let favSong = this.previousElementSibling; // here we select the favourite song and his content
    let selectedElement = favSong.innerHTML; //==============================================
    heartIcons.push(selectedElement) // here we add the son at the array of favourite song reay to be show
    console.log(arrFavSong) // ===========================================
}
else if (!classActive) {

}
}















// icondpurpletHeart.addEventListener("click", addFavouritTotheList)
// icondoorstHeart.addEventListener("click", addFavouritTotheList)
// iconledZep.addEventListener("click", addFavouritTotheList)
// iconwho.addEventListener("click", addFavouritTotheList)
// iconroll.addEventListener("click", addFavouritTotheList)
// iconpfloyd.addEventListener("click", addFavouritTotheList)
// iconclash.addEventListener("click", addFavouritTotheList)
// iconpolice.addEventListener("click", addFavouritTotheList)
// iconbowie.addEventListener("click", addFavouritTotheList)
// iconjoplin.addEventListener("click", addFavouritTotheList)
// iconmfsb.addEventListener("click", addFavouritTotheList)
// iconhendrix.addEventListener("click", addFavouritTotheList)


/* let iconledZep = document.getElementsByClassName("ledZep").classList.contains("bi-heart")
let iconwho = document.getElementsByClassName("who").classList.contains("bi-heart")
let iconroll = document.getElementsByClassName("roll").classList.contains("bi-heart")
let iconpfloyd = document.getElementsByClassName("pfloyd").classList.contains("bi-heart")
let iconclash = document.getElementsByClassName("clash").classList.contains("bi-heart")
let iconpolice = document.getElementsByClassName("police").classList.contains("bi-heart")
let iconbowie = document.getElementsByClassName("bowie").classList.contains("bi-heart")
let iconjoplin = document.getElementsByClassName("joplin").classList.contains("bi-heart")
let iconmfsb = document.getElementsByClassName("mfsb").classList.contains("bi-heart")
let iconhendrix = document.getElementsByClassName("hendrix").classList.contains("bi-heart") */