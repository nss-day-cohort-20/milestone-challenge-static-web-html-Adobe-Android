// TODO:
// Create an array to hold your posts (at least 2 posts). 
// Each item in the array must be an object that contains at a minimum the following information:
// Title, Copy, Date. Use JavaScript to add each post to the DOM., Date. 
// Use JavaScript to add each post to the DOM.
// Complete:
// The page will have a linked JavaScript file for the blog posts section. 

var posts = [
{Title:"Post title 1", Description:"Post content 1", Copy:"1?", Date:"06/26/17"},
{Title:"Post title 2", Description:"Post content 2", Copy:"2?", Date:"06/27/17"},

];

posts.forEach(function(element) {
  let blogPlace = document.getElementById("blogPlace");
  blogPlace.innerHTML += `<h4 class="border-color">${element.Title}
  </h4> <article class="border-color"><p>${element.Description}</p><p>${element.Date}<p></article>`;  
});




