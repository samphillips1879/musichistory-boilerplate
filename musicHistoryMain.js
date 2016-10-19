var songsRequest = new XMLHttpRequest();


songsRequest.addEventListener("load", songsHandler);
function songsHandler() {




	var data = JSON.parse(event.target.responseText);
	console.log("data", data);




	var songList = document.getElementById("songList");



	for (var currentSong in data.songs) {
	var songData = '';
    var song = data.songs[currentSong]
    songData += "<div class='song-block'>";
    songData += `<h1>${song.title}</h1>`;
    songData += "<div class='artist'>Performed by ";
    songData += song.artist;
    songData += "</div>";
    songData += "<div class='album'>On the album ";
    songData += song.album;
    songData += "</div>";
    songData += "</div>";

    songList.innerHTML += songData;

	}
}


songsRequest.open("GET", "songs.json");
songsRequest.send();