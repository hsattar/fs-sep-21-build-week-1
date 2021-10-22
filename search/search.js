const searchInput = document.querySelector('#song-search')
// const searchQuery = searchInput.value
const searchBtn = document.querySelector('#search-btn')

searchInput.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        e.preventDefault()
        searchBtn.click()
    }
})

searchBtn.addEventListener('click', () => {
    callApi()
    searchResults()
    searchInput.value = ''
})

const callApi = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput.value}`)
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log(`There was an error. Status Code - ${response.status}`)
                    return   
                }
    
                response.json().then(function(data) {
                    searchResults(data)
                    displayResults(data)
                })
            }
        )
    
        .catch(function(err) {
            console.log(`Fetch Error`, err)
        })
}

const searchResults = (data) => {
    const searchResultsText = document.getElementById('search-results')
    let results = data.data
    searchResultsText.innerHTML = `Showing <b>${results.length}</b> Results For <b>${searchInput.value}</b>`
}

const displayResults = (data) => {
    const resultsContainer = document.getElementById('show-results-container')
    resultsContainer.innerHTML = ''
    let results = data.data
    results.forEach(result => {
        const newSong = document.createElement('div')
        newSong.innerHTML = `<p>${result.title}</p>`
        resultsContainer.appendChild(newSong)
    })
}

