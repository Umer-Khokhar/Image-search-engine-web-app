import './style.css'
import './utils.css'

const accessKey = `3bUIDpI12flfNDnNeQqH8_RcoBLMcHc7rM2gVK9m3JA`

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult= document.getElementById("search-results");
const resultBtn = document.getElementById("results");


let keryword = ''
let page = 1;

async function searchImaages() {
    keryword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keryword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    const myResults = data.results;
    myResults.map(result => {
        const image = document.createElement('img');
        image.className = 'images rounded-lg'
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    resultBtn.style.display = 'flex'
}

searchForm.addEventListener('submit' , e => {
    e.preventDefault();
    page = 1;
    searchImaages()
    // searchBox.value = '';
})

resultBtn.addEventListener('click', e => {
    searchImaages()
    console.log('clicked!')
    page++;
})