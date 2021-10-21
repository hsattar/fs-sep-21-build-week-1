const albumSongs = [
    {
        title: '20th Century Fox Fanfare',
        artist: 'Queen',
        duration: '0:25'
    },
    {
        title: 'Somebody To Love',
        artist: 'Queen',
        duration: '4:55'
    },
    {
        title: 'Doing All Right - ...Revisited',
        artist: 'Queen',
        duration: '3:16'
    },
    {
        title: 'Keep Yourself Alive - Live At The Rainbow',
        artist: 'Queen',
        duration: '3:56'
    },
    {
        title: 'Killer Queen',
        artist: 'Queen',
        duration: '2:59'
    },
    {
        title: 'Fat Bottomed Girls - Live In Paris',
        artist: 'Queen',
        duration: '4:37'
    },
    {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        duration: '5:54'
    },
    {
        title: 'Now I\'m here - Live At The Hammersmith Odeon',
        artist: 'Queen',
        duration: '4:25'
    },
    {
        title: 'Crazy Little Thing Called Love',
        artist: 'Queen',
        duration: '2:43'
    }    
]



const heart = document.querySelector('.bi-heart')
let heartClicks = 0
heart.addEventListener('click', () => {
    if (heartClicks % 2 === 0) {
        heart.className = 'bi bi-heart-fill'
        heart.style.color = 'red'
    } else {
        heart.className = 'bi bi-heart'
        heart.style = 'lightgrey'
    }
    heartClicks++
})

const songInfo = document.querySelectorAll('.song-info')
songInfo.forEach(song => {
    song.addEventListener('click', e => {
        if (song.classList.contains('selected-song')) {
            song.classList.remove('selected-song')
        }
        const songInformation = e.currentTarget
        songInformation.classList.add('selected-song')
        const songTitle = document.querySelector('.selected-song div:nth-child(2)')
        console.log(songTitle)
    })
})




const album2 = [
    {
        title: 'Chicago free style',
        artist: 'Drake',
        duration: '3:25'
    },
    {
        title: 'Iam my feelings',
        artist: 'Drake',
        duration: '4:00'
    },
    {
        title: 'Life is good',
        artist: 'Drake',
        duration: '3:30'
    },
    {
        title: 'God\'s Plan',
        artist: 'Drake',
        duration: '4:20'
    },
    {
        title: 'Money in the Grave',
        artist: 'Drake',
        duration: '3:40'
    },
    {
        title: 'Too much',
        artist: 'Queen',
        duration: '4:37'
    },
    {
        title: 'Doing it wrong',
        artist: 'Drake',
        duration: '4:54'
    },
    {
        title: 'Now I\'m here - Live At The Hammersmith Odeon',
        artist: 'Drake',
        duration: '4:40'
    },
    {
        title: 'Fake Love',
        artist: 'Drake',
        duration: '2:43'
    }    
]

const album3 = [
    {
        title: 'Love Yourself',
        artist: 'Justin Bieber',
        duration: '3:25'
    },
    {
        title: 'Yummy',
        artist: 'Justin Bieber',
        duration: '4:00'
    },
    {
        title: 'One Time',
        artist: 'Justin Bieber',
        duration: '3:30'
    },
    {
        title: 'Boyfriend',
        artist: 'Justin Bieber',
        duration: '4:20'
    },
    {
        title: 'Sorry',
        artist: 'Justin Bieber',
        duration: '3:40'
    },
    {
        title: 'Somebody to love',
        artist: 'Justin Bieber',
        duration: '4:37'
    },
    {
        title: 'Nothing like us',
        artist: 'Justin Bieber',
        duration: '4:54'
    },
    {
        title: 'Forever',
        artist: 'Justin Bieber',
        duration: '4:40'
    },
    {
        title: 'Fake Love',
        artist: 'Justin Bieber',
        duration: '2:43'
    }    
]





const albumSongsContainer = document.querySelector('#album-songs-container')
let albumChoices = [
    'albumSongs',
     'album2',
     'album3'
] 
let currentAlbum = albumChoices[0]

for (let i = 0; i < currentAlbum.length; i++) {
    const songRow = document.createElement('div')
    songRow.innerHTML = `
    <div class="row song-info">
                    
        <div class="col-1 light-gray-text">
            <p>${i + 1}</p>
        </div>

        <div class="col-10">
            <p class="my-0 font-weight-bold">${currentAlbum[i].title}</p>
            <p class="mt-0 mb-2 smaller-text light-gray-text">${currentAlbum[i].artist}</p>
        </div>

        <div class="col-1 light-gray-text">
            <p>${currentAlbum[i].duration}</p>
        </div>
    
    </div>`
    albumSongsContainer.appendChild(songRow)
}


const carRightButton = document.querySelector('.carousel-control-next')
carRightButton.addEventListener("click", function(){
   songRow.appendChild(currentAlbum[1])




})