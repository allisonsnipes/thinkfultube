"use strict" //always put use stript


$(document).ready(function(){ //always use document ready function to start
    generateSearch();
    $(".populatedSearch").hide();
    const key = 'AIzaSyBfo5FDsAC78Rrqd5cjrGu4L4UUBUqZp44';
    const URL = '';

});


$(".submitButton").on("click", event => { //listner for user clicking submit 
    event.preventDefault();

});

function generateSearch() { //generates the YouTube search from DOM manipulation
    $(".populatedSearch").html(`
        <a href="#" class="previousResults round"> &#8249; </a>
        <a href="#" class="nextResults round"> &#8250; </a>
    
    `);
}
