window.onload = function () {
    /* loadArtists("7562101"); */
    addGreenPlayImgEventListener()
    addListenerToLoveHeart()
    addListenerToFirstButton()
    addEventToArtistName()
}



function addGreenPlayImgEventListener() {
    let greenPlayNode = document.querySelectorAll('.green-play-img')
    for (let play of greenPlayNode) {
        play.addEventListener('click', addNewArtistToNowPlaying)
    }
}

function addNewArtistToNowPlaying(e) {
    let artistName = e.target.closest('.card').childNodes[5].childNodes[1].innerText
    let songName = e.target.closest('.card').childNodes[5].childNodes[3].innerText
    let currentArtistNode = document.querySelector('.p-artist-name')
    let currentSongNode = document.querySelector('.p-song-name')
    currentArtistNode.innerText = artistName
    currentSongNode.innerText = songName
}

function addListenerToLoveHeart() {
    document.querySelector('.bi-heart').addEventListener('click', showOrHideHeart)
    document.querySelector('.js-heart').addEventListener('click', showOrHideHeart)
}
function showOrHideHeart() {
    document.querySelector('footer i:first-of-type').classList.toggle('visible')
}

function addListenerToFirstButton() {
    let seeAllBtnNode = document.querySelectorAll('.see-all-btn')
    seeAllBtnNode[0].addEventListener('click', addNewRow)
    // console.log(seeAllBtnNode)
}

function addNewRow() {
    let newRowNode = document.querySelector('.hidden-row')
    newRowNode.classList.toggle('second-section-card-hidden')
    newRowNode.classList.toggle('new-row-animation')

    console.log('done')
}
function addEventToArtistName() {
    let artistNode = document.querySelector('.p-artist-name')
    artistNode.addEventListener('click', changePage)
}
function changePage(e) {
    location.href = "/artist.html";
}


idevent = []  
/* ONCLIVK SEARCH BUTTON FUNCTION */
let searchFunction = (event) => {
    console.log(event.target.parentElement.querySelector("#search").value);
    idevent.push(event.target.parentElement.querySelector("#search").value) 

    let loadArtists = (idevent) => {
        fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + idevent, {
            method: "GET",
            headers: {
                'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
                'x-rapidapi-key': '0b0dc2c530msh8f8b7e3d91c4b39p18f7d2jsn1302039241ee'
            }
        })
        .then(response => response.json())
        .then(body => { 
            console.log(body.data[0])
                   /* We start by removing the whole row */
                 const row1 = document.querySelector(".rowspecial1");
                row1.innerHTML = "";
    
                /* Then we put in the new cards */
                for (let i = 0; i < 10; i++) {
                    let newCol = document.createElement("div")
                    newCol.innerHTML = `<div class="col">
                    <div class="card mb-3">
                        <div class="row no-gutters row-remove-margin row-remove-margin">
                            <div class="col-4">
                            <a href="./albumpage.html?id=${body.data[i].album.id}">  
                            <img class="first-section-img" src="${body.data[i].album.cover_big}" alt="...">
                            </a>
                            </div>
                            <div class="col-6 flex-container">
                                <div class="card-body card-body-section1">
                                    <p class="card-text">This is the Album ID: ${body.data[i].album.id}</p>
                                </div>
                            </div>
                            <div class="col-2 flex-container">
    
                            </div>
                        </div>
                    </div>
                </div>
                    `
                    row1.appendChild(newCol); 
                    }
                });
            };
            loadArtists(idevent);




} 









 