// play pause button

let showPauseButton = (event) => {
    let playIcon = document.querySelector("#play-pause-button-id");
    console.log(event);
    //let pauseIcon = document.querySelector(".pause-icon");
    if (playIcon.classList.value === "bi bi-play-circle-fill big-play-button") {
        playIcon.classList.value = "bi bi-pause-circle-fill pause-icon";
    } else {
        playIcon.classList.value = "bi bi-play-circle-fill big-play-button";
    }
};

function addEventToHeart() {
    let heartNode = document.querySelector("#heart-icon-1");
    heartNode.addEventListener("click", favouriteSong);
}
addEventToHeart();

function favouriteSong() {
    console.log("hello");
    let heartNode = document.querySelector("#heart-icon-1");
    if (heartNode.classList.value === "bi bi-heart") {
        heartNode.classList.value = "bi bi-heart-fill";
    } else {
        heartNode.classList.value = "bi bi-heart";
    }
}

//---------------------- dynamic content ---------------------------------
/*
let id = new URLSearchParams(window.location.search)



window.onload = () => {
  fetchFirst();
};

const fetchFirst = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062),{
      "method": "GET"
    })
      .then(response => response.json())
      .then(database => {
        console.log(database);
        let songContainer = document.querySelector('#songContainer')
        songContainer.innerHTML = ''
        database.tracks.data.forEach((element, i) => {
          let newDiv = document.createElement('div')
          songContainer.appendChild(newDiv)
};

*/

const options = {};

fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/album/123456" /*+ id.get("albumId") */,
    options
).then((response) =>
    response.json().then((albums) => {
        console.log(albums);
        console.log(albums.tracklist);

        const newSong = document.querySelector("#songContainer");
        newSong.innerHTML = "";

        albums.forEach((album) => {
            const newTrack = document.createElement(
                "#album-track-list > div:nth-child(1)"
            );
            /* newTrack.classList.add("col-sm-4") */
            newTrack.innerHTML = ` <div class="ml-3 pb-4">
            <span class="track-num">2.</span>
            <span class="album-song ml-4"
                ><strong
                    id="songConatainer"
                    class="track-decoration"
                    >Somebody To Love</strong
                ><br /><span class="singer-name"
                    >Queen</span
                ></span
            >
        </div>
        `;
            newSong.appendChild(newTrack);
        });
    })
);

let heroAlbumCover = document.querySelector("#hero-img");
heroAlbumCover.innerHTML = "";
let newDivTop = document.createElement("div");
heroAlbumCover.appendChild(newDivTop);

const heroTopcontainer = `<section id="album-page-hero">
<div class="container-fluid album-container">
    <div class="row">
        <div class="col-2">
            <img
                id="hero-img"
                src="https://i.pinimg.com/1200x/21/b1/c7/21b1c7f4af7c339fff746041a0e2403f.jpg"
                class="img-fluid"
                alt="Hybrid theory album cover"
            />
        </div>
        <div class="col-10">
            <div
                class="d-flex flex-column justify-content-end h-100"
            >
                <small>ALBUM</small>
                <h1>
                    Bohemain Rhapsody(Original
                    Soundtrack)
                </h1>
                <div>
                    <p>
                        <small
                            ><strong>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/pt/9/9f/Bohemian_Rhapsody.png"
                                    height="22px"
                                    alt=""
                                    style="
                                        border-radius: 2rem;
                                    "
                                    alt="Original Album Cover"
                                />
                                Queen . </strong
                            >2018<strong> . </strong
                            >22 songs<strong>
                                ,
                            </strong>
                            1hr 19 min
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>`;

/*const options = {};

fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/album/" /* + query ,
    options
).then((response) =>
    response.json().then((albums) => {
        console.log(albums);
        console.log(albums.tracklist);

        const table1 = document.querySelector(".table-body");
        table1.innerHTML = "";

        albums.forEach((album) => {
            const tr1 = document.createElement("tr");
            /* tr1.classList.add("col-sm-4") 
            tr1.innerHTML = ` <tr>
        <th scope="row">2</th>
        <td>
          <img
            src="${album.cover_small}"
            alt="Album cover"
            class="table-cover-picture mr-2"
          />
          <span></span>
        </td>
        <td>103,112,002</td>
        <td>5:45</td>
        <td>
          <div
            class="popup"
            onclick="addSongToLikedAlbum()"
            onclick="heartFilledFunction()"
          >
            <i class="bi bi-heart heart-table">
              <i class="bi bi-suit-heart-fill heart-filled"></i>
              <span class="popuptext myPopup">
                Added to your Liked Songs
              </span>
            </i>
          </div>
        </td>
      </tr>
        `;
            table1.appendChild(tr1);
        });
    })
);
*/
