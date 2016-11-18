(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";


console.log("snarf");


let listLink = $("#listMusic"),
listView = $("#listMusicView"),
addLink = $("#addMusic"),
addView = $("#addMusicView");
// var listLink = document.getElementById("listMusic");
// var listView = document.getElementById("listMusicView");
// var addLink = document.getElementById("addMusic");
// var addView = document.getElementById("addMusicView");









listLink.click( () => {
    listView.addClass("visible");
    addView.addClass("hidden");

    listView.removeClass("hidden");
    addView.removeClass("visible");

});
// listLink.addEventListener("click", function() {
//     listView.classList.add("visible");
//     addView.classList.add("hidden");

//     listView.classList.remove("hidden");
//     addView.classList.remove("visible");

// });










addLink.click( () => {
    listView.addClass("hidden");
    addView.addClass("visible");

    listView.removeClass("visible");
    addView.removeClass("hidden");
});
// addLink.addEventListener("click", function() {
//     listView.classList.add("hidden");
//     addView.classList.add("visible");

//     listView.classList.remove("visible");
//     addView.classList.remove("hidden");
// });










let addButton = $("#addButton");
addButton.click(createSongObject);
// let addButton = document.getElementById("addButton");
// addButton.addEventListener("click", createSongObject);







let inputSongName = $("#inputSongName"),
inputArtistName = $("#inputArtistName"),
inputAlbumName = $("#inputAlbumName");
// let inputSongName = document.getElementById("inputSongName");
// let inputArtistName = document.getElementById("inputArtistName");
// let inputAlbumName = document.getElementById("inputAlbumName");






//I've already started on music history #4, so taking the user input and inserting it into the DOM like the instructions say to do for music history #3 would require me circumventing the entire JSON injection process that I've already started. So, I'm just going to take the user inputs and use them to create a new song object array. I predict that there is some way to update JSON files, which we will learn later. If I'm right, I'm hoping there will be a pretty easy way to inject my new song object into said JSON file. sooooooooooo, I'm just gonna work on that assumption for now instead of going back and undoing the work I've already done. Hopefully I'm taking a step in the right direction.......

//this next block of code creates an array called newSongs and then injects another object into it with each iteration of the function. Each injected object contains the properties as defined by the user.... I'm hoping it'll be pretty easy to update the JSON file with the objects in this array... once I find out how to update JSON files
let songCounter = 0,
newSongs = [];
function createSongObject() {
    newSongs[songCounter] = {};
    newSongs[songCounter].title = inputSongName.val();
    newSongs[songCounter].artist = inputArtistName.val();
    newSongs[songCounter].album = inputAlbumName.val();
    console.log("newSongs", newSongs);
    songCounter++;
}
// let songCounter = 0
// let newSongs = [];
// function createSongObject() {
//     newSongs[songCounter] = {}
//     newSongs[songCounter].title = inputSongName.value;
//     newSongs[songCounter].artist = inputArtistName.value;
//     newSongs[songCounter].album = inputAlbumName.value;
//     console.log("newSongs", newSongs);
//     songCounter++;
// }
























/////////////
let songsRequest = new XMLHttpRequest();

let songList = $("#songListSongHolder");




songsRequest.addEventListener("load", songsHandler);
function songsHandler() {




    let data = JSON.parse(event.target.responseText);
    console.log("data", data);







	for (let currentSong in data.songs) {
        let songOutput = '';
        let song = data.songs[currentSong];
        songOutput += `<div class='song-block'><h1>${song.title}</h1><div class='artist'>Performed by ${song.artist}</div><div class='album'>On the album ${song.album}</div><button>Delete</button></div>`;

        songList.innerHTML += songOutput;

    }
 //    for (let currentSong in data.songs) {
 //    	let songOutput = '';
 //        let song = data.songs[currentSong]
 //        songOutput += "<div class='song-block'>";
 //        songOutput += `<h1>${song.title}</h1>`;
 //        songOutput += "<div class='artist'>Performed by ";
 //        songOutput += song.artist;
 //        songOutput += "</div>";
 //        songOutput += "<div class='album'>On the album ";
 //        songOutput += song.album;
 //        songOutput += "</div>";
 //        songOutput += "<button>Delete</button></div>";

 //        songList.innerHTML += songOutput;

	// }

}
songList.click(songDelete);

function songDelete(event) {
    if (event.target.innerHTML === "Delete") {
        console.log("delete innerHTML Test Works");
        event.target.parentElement.remove();       //THIS LINE IS HOW TO REMOVE THE PARENT OF THE DELETE BUTTON

    }   
        console.log("deleteEvent", event);
}



songsRequest.open("GET", "songs.json");
songsRequest.send();


let songs2Request = new XMLHttpRequest();
songs2Request.open("GET", "songs2.json");

songs2Request.addEventListener("load", songsHandler);

function requestSongs2() {
    songs2Request.send();
}



$("#moreButton").click(requestSongs2);


$("#moreButton").click(function(event) {
    console.log("moreButtonClicked", event);
});









},{}]},{},[1]);
