var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let key = "AIzaSyB9XbWGYorHaSfR4wbf89EkIzoKxiFo_ck";
let search = document.querySelector("#search");
let btn = document.querySelector("#btn");

var player;

async function searchOnYoutube() {
  const res = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&type=video&q=${encodeURI(
      search.value
    )}&maxResults=3&order=viewCount`
  );

  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: res.data.items[0].id.videoId,
  });
}

function submitSearch(e) {
  e.preventDefault();
  searchOnYoutube();
  search.value = "";
}

btn.addEventListener("click", submitSearch);
