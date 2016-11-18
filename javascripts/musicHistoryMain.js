"use strict";

const listLink = $("#listMusic"),
listView = $("#listMusicView"),
addLink = $("#addMusic"),
addView = $("#addMusicView"),
songList = $("#songListSongHolder"),
addButton = $("#addButton"),
inputSongName = $("#inputSongName"),
inputArtistName = $("#inputArtistName"),
inputAlbumName = $("#inputAlbumName");
let songCounter = 0,
newSongs = [];



//I've already started on music history #4, so taking the user input and inserting it into the DOM like the instructions say to do for music history #3 would require me circumventing the entire JSON injection process that I've already started. So, I'm just going to take the user inputs and use them to create a new song object array. I predict that there is some way to update JSON files, which we will learn later. If I'm right, I'm hoping there will be a pretty easy way to inject my new song object into said JSON file. sooooooooooo, I'm just gonna work on that assumption for now instead of going back and undoing the work I've already done. Hopefully I'm taking a step in the right direction.......

//this next block of code creates an array called newSongs and then injects another object into it with each iteration of the function. Each injected object contains the properties as defined by the user.... I'm hoping it'll be pretty easy to update the JSON file with the objects in this array... once I find out how to update JSON files
// #firebase yolo
function createSongObject() {
    newSongs[songCounter] = {};
    newSongs[songCounter].title = inputSongName.val();
    newSongs[songCounter].artist = inputArtistName.val();
    newSongs[songCounter].album = inputAlbumName.val();
    console.log("newSongs", newSongs);
    songCounter++;
}




function songsHandler(Prom) {
    Prom.then( (songData) => {
        for (let currentSong in songData.songs) {
            let songOutput = '',
            song = songData.songs[currentSong];
            songOutput += `<div class='song-block'><h1>${song.title}</h1><div class='artist'>Performed by ${song.artist}</div><div class='album'>On the album ${song.album}</div><button>Delete</button></div>`;
            songList.append(songOutput);
        }
    });
}

function getSongs() {
    return new Promise( (resolve, reject) => {
        $.ajax({
            url: 'data/songs.json'
        }).done((data)=>{
            resolve(data);
        }).fail((error)=>{
            reject(error);
        });
    });
}

function requestSongs2() {
    return new Promise( (resolve, reject) => {
        $.ajax({
            url: 'data/songs2.json'
        }).done((data)=>{
            resolve(data);
        }).fail((error)=>{
            reject(error);
        });
    });
}

listLink.click( () => {
    listView.addClass("visible");
    addView.addClass("hidden");

    listView.removeClass("hidden");
    addView.removeClass("visible");
});

addLink.click( () => {
    listView.addClass("hidden");
    addView.addClass("visible");

    listView.removeClass("visible");
    addView.removeClass("hidden");
});

addButton.click(createSongObject);

$("#moreButton").click( () => {
    songsHandler(requestSongs2());   
});

songList.click(songDelete);
function songDelete(event) {
    let targ = $(event.target);
    if (targ.html() === "Delete") {
        targ.parent().remove(); 
    }   
}

songsHandler(getSongs());









