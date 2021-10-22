const searchInput = document.querySelector('#song-search')
// const searchQuery = searchInput.value
const searchBtn = document.querySelector('#search-btn')

searchBtn.addEventListener('click', () => {
    callApi()
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
                    console.log(data)
                })
            }
        )
    
        .catch(function(err) {
            console.log(`Fetch Error`, err)
        })
}



