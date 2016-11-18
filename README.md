<!-- # Music History

This is the project that you will be working for your individual work throughout the entire front end course. Don't worry, you'll be building lots of other applications, but when you learn a new technique, library or language, you'll be cutting your teeth with it on Music History.

I've started you off with a very basic HTML document, the `index.html` file. This file name is the default file that most any web server looks for in the directory in which is was started. This is why you don't have to type in `www.google.com/index.html`. If the file exists, the web server sends it back to you if you just request the root URL.

> **Terminology:** Root URL simply means your domain name (or IP address) with no other documents, or folders specified. `www.google.com` is the root URL of Google's web site, but `www.google.com/finance` is not.

## Your first Fork & Clone

You're going to get a copy of this Github repository downloaded - a.k.a. cloned - to your machine using the `git` command. Here's how to do it.

1. Look all the way up and to the right of this screen and you'll see a button with the word **Fork** on it. Click that button,
2. What you've just done is taken a copy of *my* repository and all the code inside it, and copied into your Github account. You can now do whatever you like to your fork of my repository and it won't affect mine at all.
3. Now on the top of the page, you will see the text **HTTPS** with a text box next to it. Make sure that HTTPS is selected.
4. Click the little clipboard icon to the right and it copies that URL to your computer's clipboard.
5. Open your terminal window and navigate to your workspace folder.
6. Type in `git clone ` and then paste the URL after that text. You should see
   `git clone https://github.com/{your account name here}/musichistory-boilerplate.git musichistory`
1. Hit your enter key and git will do two things. First, it creates a `musichistory` sub-directory under `/workspace` and then downloads all the code into that directory.
1. Now `ls musichistory`.
1. You will see the lonely `index.html` file sitting in there.

Congratulations, you've just cloned your first Github repository!

Now here's your assignment.

## Individual Assignment

You will be building the basic structure of your Music History application in HTML and making it look good with the skills you learned in CSS.

Visit the [Music History mockup](https://moqups.com/chortlehoort/1E8LJX7r/) that I created. You will be recreating that document in your own HTML file.

### Criteria 

1. Create five options for the artist select element of any artist that you enjoy.
1. Create at least five options for the album select element. One, or more, album for each artist.
1. The links in the navigation bar don't need to link to anything just yet, you can use `<a href="#">View music</a>` for now
1. Pick your four favorite songs from the artists you have chosen and use the information for each in the list that's on the right-hand side. You can use `h1` tags, `div` tags, `section` tags... whatever you like.

## Completing

Once you are done, make sure you add your files to git, make a commit, and then push your new code up to Github with the following command `git push origin master`. -->
















<!-- 

instruction set for version 2







Use JavaScript arrays, loops, and innerHTML to show the music you love.

Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the songs.js file, which contains an array of strings with song information.

Each student must add one song to the beginning and the end of the array.


Loop over the array and remove any words or characters that obviously don't belong.


Students must find and replace the > character in each item with a - character.


Must add each string to the DOM in index.html in the main content area.

{Song name} by {Artist} on the album {Album}
Merging your branch

After you've got all of the requirements completed, follow these steps.

In your musichistory directory, enter the command git checkout master. This switches you back to the master branch.
git merge -X theirs version2
If you see a vim screen with a default message in it just :x to save and exit.
Your branch is now merged into the master branch and you can push the master branch up to Github with git push origin master


 -->







<!-- Instructions FOR PART 3 -->

<!-- Time to make Music History into a single page application. Before you begin please review the sample code I provided in JavaScript 103 about building a simple SPA. -->

<!-- In the navigation bar, make sure you have two links labeled "List Music", and "Add Music". -->
<!-- Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a <form> element because we're not actually submitting this form anywhere. -->
<!-- Add a <button> element at the bottom of the input fields labeled "Add". -->
<!-- The input fields and the add button make up the Add Music View. -->
<!-- The existing view - the combination of the filter form and the song list - will be referred to as the List Music View. -->
<!-- The Add Music View should not appear when the user first visits your page. The song list with the corresponding filter form should be visible. -->
<!-- When the user clicks on "Add Music" in the navigation bar, the List Music View should be hidden, and the Add Music View should be shown (see example wireframe). -->
<!-- When the user clicks on "List Music" in the navigation bar, the Add Music View should be hidden, and the List Music View should be shown (see example wireframe). -->
<!-- Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM. -->















<!-- 
instructions for version 4 (skipped 3 for now)






Instructions -->

<!-- Part One -->

<!-- Read from local JSON file with an XHR. -->
<!-- Loop over results and inject into Music History list view. -->
<!-- Add delete button DOM to each row and, when it is clicked, delete the entire row in the DOM. -->
<!-- Part Two -->

<!-- Take your music and split it into two JSON file instead of them all living on one file. -->
<!-- Add a button at the bottom of your music list and label it "More >". -->
<!-- Load the songs from the first list and inject the DOM into the document as you've already done. -->
<!-- When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button. -->



Instructions for part 5

Now is the time to make Music History a fully functional, single page, modular, asychronous, application.

Modular with Browserify

Using Browerify, you should create several modules for the application.
One module is responsible for loading songs from a JSON file and storing them in an array. This module should expose one method for getting the entire list of songs, and one method for adding a song to the array.

One module is responsible for making the filtering form work. Therefore, it will need to use methods from the previous module.

One module is responsible for showing the two views of the app (song list and song form).



Filtering

When the user selects an artist, only songs from that artist should appear.
When the user selects an album, only songs from that album should appear.
Adding Songs

The new music form should have a field for every key on a song object. We started with just Artist, Album, and Title, but you can add more if you wish.
The music form should be fully functional. When you click the Save Song button, a new object should be added to the array of songs. The DOM should also be immediately updated with the new song added.


































