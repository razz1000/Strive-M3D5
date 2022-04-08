window.onload = function () {
    loadArtists("7562101");
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
let loadArtists = (id) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/+${id}`, {
        method: "GET",
        headers: {
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
            'x-rapidapi-key': '0b0dc2c530msh8f8b7e3d91c4b39p18f7d2jsn1302039241ee'
        }
    })
        .then((response) => response.json())
        .then((data) => { 
            console.log(data)
         
            console.log(body)
            let cards = document.getElementsByClassName("card");
            const row1 = document.querySelector(".rowspecial1");
            row1.innerHTML = "";
/*               for (let i = 0; i < body.data.length; i++) */ {
                 let card = document.getElementsByClassName('card');
                 card.className = "card";

                 card.innerHTML =
                     `<div class="col">
                 <div class="card mb-3">
                     <div class="row no-gutters row-remove-margin row-remove-margin">
                         <div class="col-4">
                             <img class="first-section-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FOz8AAOSwnIleltAL%2Fs-l640.jpg&f=1&nofb=1" alt="...">
                         </div>
                         <div class="col-6 flex-container">
                             <div class="card-body card-body-section1">
                                 <p class="card-text">${data.body.title}</p>
                             </div>
                         </div>
                         <div class="col-2 flex-container">
                             <img class="green-play-img" src="http://hypebot.typepad.com/.a/6a00d83451b36c69e201bb09b0b161970d-200wi" alt="">
                         </div>
                     </div>
                 </div>
             </div>` 
                        }
        row1.appendChild(cards); 
        });
};


