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
        darkTheme = false
    } else {
        root.style.setProperty('--black', '#fff')
        root.style.setProperty('--light-black', '#b3b3b3')
        root.style.setProperty('--dark-black', '#5e5d5d')
        root.style.setProperty('--light-gray', '#f0e9e9')
        root.style.setProperty('--white', '#000')
        darkTheme = true
    }
}

themeToggle.onclick = () => {
    toggleTheme()
}

