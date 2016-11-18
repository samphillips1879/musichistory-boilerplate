"use strict";

const listView = $("#listMusicView"),
addView = $("#addMusicView");




let view = {};




view.listView = () => {
    listView.addClass("visible");
    addView.addClass("hidden");

    listView.removeClass("hidden");
    addView.removeClass("visible");
};
	

view.addView = () => {
    listView.addClass("hidden");
    addView.addClass("visible");

    listView.removeClass("visible");
    addView.removeClass("hidden");
};




// listLink.click( () => {
//     listView.addClass("visible");
//     addView.addClass("hidden");

//     listView.removeClass("hidden");
//     addView.removeClass("visible");
// });

// addLink.click( () => {
//     listView.addClass("hidden");
//     addView.addClass("visible");

//     listView.removeClass("visible");
//     addView.removeClass("hidden");
// });

module.exports = view;