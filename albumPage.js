

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

