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

const albumSongsContainer = document.querySelector('#album-songs-container')

for (let i = 0; i < albumSongs.length; i++) {
    const songRow = document.createElement('div')
    songRow.innerHTML = `
    <div class="row song-info">
                    
        <div class="col-1 light-gray-text">
            <p>${i + 1}</p>
        </div>

        <div class="col-10">
            <p class="my-0 font-weight-bold">${albumSongs[i].title}</p>
            <p class="mt-0 mb-2 smaller-text light-gray-text">${albumSongs[i].artist}</p>
        </div>

        <div class="col-1 light-gray-text">
            <p>${albumSongs[i].duration}</p>
        </div>
    
    </div>`
    albumSongsContainer.appendChild(songRow)
}

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
        console.log(e.currentTarget)
    })
})