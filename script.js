let darkTheme = true;

const root = document.documentElement
const themeToggle = document.querySelector('#toggle-theme')

const toggleTheme = () => {

    if (darkTheme) {
        root.style.setProperty('--black', '#000')
        root.style.setProperty('--light-black', '#2a2a2a')
        root.style.setProperty('--dark-black', '#121212')
        root.style.setProperty('--light-gray', '#b3b3b3')
        root.style.setProperty('--white', '#fff')
        root.style.setProperty('--dark-gray', '#727272')
        root.style.setProperty('--sidebar-text-color', '#a0a0a0')
        root.style.setProperty('--card-wrapper-bg', '#5554545e')
        root.style.setProperty('--recently-played', '#3e3e3e')
        root.style.setProperty('--good-morning', '#3c0908')
        darkTheme = false
    } else {
        root.style.setProperty('--black', '#fff')
        root.style.setProperty('--light-black', '#b3b3b3')
        root.style.setProperty('--dark-black', '#b3b3b3')
        root.style.setProperty('--light-gray', '#000')
        root.style.setProperty('--white', '#000')
        root.style.setProperty('--dark-gray', '#5e5d5d')
        root.style.setProperty('--sidebar-text-color', '#2e2e2e')
        root.style.setProperty('--card-wrapper-bg', '#b3b3b3')
        root.style.setProperty('--recently-played', '#b3b3b3')
        root.style.setProperty('--good-morning', '#fff')

        darkTheme = true
    }
}


// window.onload = () => {
//     toggleTheme()
// }

themeToggle.onclick = () => {
    toggleTheme()
}

const goodMorningCards = [
    {
        img: './assets/cards/9.jpg',
        title: 'Song 1'
    },
    {
        img: './assets/cards/10.jpg',
        title: 'Song 2'
    },
    {
        img: './assets/cards/11.jpg',
        title: 'Song 3'
    },
    {
        img: './assets/cards/12.jpg',
        title: 'Song 4'
    },
    {
        img: './assets/cards/13.jpg',
        title: 'Song 5'
    },
    {
        img: './assets/cards/14.jpg',
        title: 'Song 6'
    },
    {
        img: './assets/cards/15.jpg',
        title: 'Song 7'
    },
    {
        img: './assets/cards/16.jpg',
        title: 'Song 8'
    },

    {
        img: './assets/cards/17.jpg',
        title: 'Song 9'
    },
    {
        img: './assets/cards/18.jpg',
        title: 'Song 10'
    },
    {
        img: './assets/cards/19.jpg',
        title: 'Song 11'
    },

    {
        img: './assets/cards/20.jpg',
        title: 'Song 12'
    },

]

const goodMorningContainer = document.querySelector('.good-morning-container')
goodMorningCards.forEach(card => {
    const cardContainer = document.createElement('div')
    cardContainer.className = 'col-6 col-md-4 col-lg-3 d-flex align-items-center'
    cardContainer.innerHTML = `
    <div class="card-wrapper d-flex my-2 align-items-center rounded">
        <img cla src="${card.img}">
        <p class="ml-3 mb-0">${card.title}</p>
    </div>`
    goodMorningContainer.appendChild(cardContainer)
})



const favouriteSongs = [
    {
        name: '',
        duration: ''
    },
    
]

