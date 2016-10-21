


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
























/////////////
var songsRequest = new XMLHttpRequest();

var songList = document.getElementById("songListSongHolder");

songsRequest.addEventListener("load", songsHandler);
function songsHandler() {




    var data = JSON.parse(event.target.responseText);
    console.log("data", data);







	for (var currentSong in data.songs) {
    	var songOutput = '';
        var song = data.songs[currentSong]
        songOutput += "<div class='song-block'>";
        songOutput += `<h1>${song.title}</h1>`;
        songOutput += "<div class='artist'>Performed by ";
        songOutput += song.artist;
        songOutput += "</div>";
        songOutput += "<div class='album'>On the album ";
        songOutput += song.album;
        songOutput += "</div>";
        songOutput += "<button>Delete</button></div>";

        songList.innerHTML += songOutput;

	}

}
songList.addEventListener("click", songDelete);

function songDelete(event) {
    if (event.target.innerHTML === "Delete") {
        console.log("delete innerHTML Test Works");
        event.target.parentElement.remove();       //THIS LINE IS HOW TO REMOVE THE PARENT OF THE DELETE BUTTON

    }   
        console.log("deleteEvent", event);
}



songsRequest.open("GET", "songs.json");
songsRequest.send();


var songs2Request = new XMLHttpRequest();
songs2Request.open("GET", "songs2.json");

songs2Request.addEventListener("load", songsHandler);

function requestSongs2() {
    songs2Request.send();
}



document.getElementById("moreButton").addEventListener("click", requestSongs2);


document.getElementById("moreButton").addEventListener("click", function(event) {
    console.log("moreButtonClicked", event);
});








