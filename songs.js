var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";



console.log("songs array", songs);

songs.unshift("Peacebone > by Animal Collective on the album Strawberry Jam");
songs.push("Spitting Venom > by Modest Mouse on the album We Were Dead Before The Ship Even Sank");


console.log("songs after adding to beginning and end", songs);


// Loop over the array and remove any words or characters that obviously dont belong.


// ....... need to do this


for (i = 0; i < songs.length; i ++) {
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@", "");
	songs[i] = songs[i].replace("(", "");
	songs[i] = songs[i].replace("!", "");
} 

console.log("songs after removing unwanted characters", songs);


// Students must find and replace the > character in each item with a - character.


// also adding a break between songs 

for (i = 0; i < songs.length; i ++) {
	songs[i] = songs[i].replace(/>/g, "-");
	songs[i] = songs[i] + "<br>";
} 


console.log('songs array after replacing ">" with "-"', songs);




// Must add each string to the DOM in index.html in the main content area.



var songList = document.getElementById("songList");

songList.innerHTML += songs.join("");








