


var listLink = document.getElementById("listMusic");
var listView = document.getElementById("listMusicView");
var addLink = document.getElementById("addMusic");
var addView = document.getElementById("addMusicView");

listLink.addEventListener("click", function() {
    listView.classList.add("visible");
    addView.classList.add("hidden");

    listView.classList.remove("hidden");
    addView.classList.remove("visible");

});

addLink.addEventListener("click", function() {
    listView.classList.add("hidden");
    addView.classList.add("visible");

    listView.classList.remove("visible");
    addView.classList.remove("hidden");
});






var addButton = document.getElementById("addButton");
addButton.addEventListener("click", createSongObject);


var inputSongName = document.getElementById("inputSongName");
var inputArtistName = document.getElementById("inputArtistName");
var inputAlbumName = document.getElementById("inputAlbumName");


//I've already started on music history #4, so taking the user input and inserting it into the DOM like the instructions say to do for music history #3 would require me circumventing the entire JSON injection process that I've already started. So, I'm just going to take the user inputs and use them to create a new song object array. I predict that there is some way to update JSON files, which we will learn later. If I'm right, I'm hoping there will be a pretty easy way to inject my new song object into said JSON file. sooooooooooo, I'm just gonna work on that assumption for now instead of going back and undoing the work I've already done. Hopefully I'm taking a step in the right direction.......

//this next block of code creates an array called newSongs and then injects another object into it with each iteration of the function. Each injected object contains the properties as defined by the user.... I'm hoping it'll be pretty easy to update the JSON file with the objects in this array... once I find out how to update JSON files
var songCounter = 0
var newSongs = [];
function createSongObject() {
    newSongs[songCounter] = {}
    newSongs[songCounter].title = inputSongName.value;
    newSongs[songCounter].artist = inputArtistName.value;
    newSongs[songCounter].album = inputAlbumName.value;
    console.log("newSongs", newSongs);
    songCounter++;
}


// var songCounter = 0
// var newSongs = {};
// function createSongObject() {
//     newSong.title = inputSongName.value;
//     newSong.artist = inputArtistName.value;
//     newSong.album = inputAlbumName.value;
//     console.log("newSong", newSong);
//     songCounter++;
// }
























/////////////
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







