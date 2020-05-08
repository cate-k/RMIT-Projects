// NAVBAR
// When the user scrolls the page, execute stickyHeader.
window.onscroll = function () {
    stickyHeader();
    currentLink();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar.
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position.
function stickyHeader() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function currentLink() {
    var navlinks = document
        .getElementsByTagName("nav")[0]
        .getElementsByTagName("a");
    var articles = document
        .getElementsByTagName("main")[0]
        .getElementsByTagName("article");

    for (var a = 0; a < articles.length; a++) {
        var arTop = articles[a].offsetTop - 1;
        var arBot = articles[a].offsetTop + articles[a].offsetHeight - 1;

        if (window.scrollY >= arTop && window.scrollY < arBot) {
            navlinks[a].classList.add("current");
        } else {
            navlinks[a].classList.remove("current");
        }
    }
}

// SLIDESHOW
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds.
}

// SYNOPSIS AREA
let selectedMovie = undefined;

// Create an EventListener that will show the details of a movie.
let createMovieSelectionHandler = function (movieId) {
    return function () {
        // Hide previously selected movie.
        if (selectedMovie) {
            document.getElementById(selectedMovie).classList.remove("selected");
        }

        // Show selected movie.
        selectedMovie = movieId;
        document.getElementById(selectedMovie).classList.add("selected");
    };
};

// Find all movie elements on the page.
let movies = document.getElementsByClassName("movie");

// Add an EventListener to each of them.
for (let i = 0; i < movies.length; ++i) {
    movies[i].addEventListener(
        "click",
        createMovieSelectionHandler(movies[i].dataset.movieId)
    );
}
