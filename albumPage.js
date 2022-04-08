

// play pause button

let showPauseButton = (event) => {   
    let playIcon = document.querySelector("#play-pause-button-id");
    console.log(event)
    //let pauseIcon = document.querySelector(".pause-icon");
    if(playIcon.classList.value === "bi bi-play-circle-fill big-play-button"){
      playIcon.classList.value = "bi bi-pause-circle-fill pause-icon"; 
    } else {
      playIcon.classList.value = "bi bi-play-circle-fill big-play-button";
    } 
   }

   function addEventToHeart() {
    let heartNode = document.querySelector('#heart-icon-1')
     heartNode.addEventListener('click', favouriteSong)
   }
   addEventToHeart() 

   function favouriteSong() {
     console.log("hello")
     let heartNode = document.querySelector('#heart-icon-1')
   if (heartNode.classList.value === "bi bi-heart"){
      heartNode.classList.value = "bi bi-heart-fill"; 
    } else {
      heartNode.classList.value = "bi bi-heart";
    } 
   }



   /*     document.querySelector('#page-heart-icon').classList.toggle('solid-heart-icon') */


   let catchingtheURLFunction = () => {
     let urlQuery = new URLSearchParams(document.location.search).get("id")
     console.log(urlQuery)

    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + urlQuery)
    .then(response => response.json())
    .then(body => { 

      console.log(body)

 
      let jumbotronimage = document.querySelector(".jumbotronimage")
      jumbotronimage.innerHTML = ""
      jumbotronimage.innerHTML = `   <div class="col-2 jumbotronimage">
      <img
        id="hero-img"
        src="${body.artist.picture_medium}"
        class="img-fluid jumbo-picture"
        alt="Hybrid theory album cover"
      />
    </div>
      `

      let titlesection = document.querySelector(".title-section1")
      titlesection.innerHTML = ""
      titlesection.innerHTML = `<div class="col-10 title-section1">
      <div class="d-flex flex-column justify-content-end h-100">
        <small>ALBUM</small>
        <h1>${body.label}</h1>
        <div>
          <p>
            <small
              ><strong>
                <img
                  src="${body.artist.picture_small}"
                  
                  alt=""
                  style="border-radius: 2rem; height: 20px;"
                  alt="Original Album Cover"
                />${body.artist.name}. </strong
              >${body.release_date}<strong> . </strong>22 songs<strong>
                ,
              </strong>
              ${body.artist.duration}
            </small>
          </p>
        </div>
      </div>
    </div>
      `

    let newrow = document.querySelector(".newrow1");
    newrow.innerHTML = ""

    for (let i = 0; i < body.tracks.data.length; i++) {  
      let div1 = document.createElement("div")
      div1.classList.add("col-5")

      div1.innerHTML = ` <div class="ml-3 pb-4">
    <span class="track-num">${body.tracks.data[i]}</span>
    <a href="./artist.html?id=${body.artist.id}">  
    <span class="album-song ml-4"
      ><strong class="track-decoration"
        >${body.tracks.data[i].title}</strong
      ><br /><span class="singer-name">${body.artist.name}</span></span
    ></a>
  </div>
    `
      newrow.appendChild(div1)
  }

})}

/*   .catch(error => console.log(error)); */

 
   catchingtheURLFunction();

