/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  Vérifier l'age
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

function verifAge() {



  var age = document.getElementById("inputAge").value;
  var modalAge = document.getElementById("myModalAge");

  if (age < 18) {
    alert("Hop hop hop! Redirection en cours!");
    window.location.assign("site2/index.html");
  }
  else {
    alert("Welcome");
  }

}



/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  Back To The Top Arrow
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

		window.onload = function () {
			buttonCreation();
			document.getElementById("myBtn").addEventListener("click", topFunction);
			document.getElementById("myBtn").setAttribute("style", "display: none; position: fixed; bottom: 20px; right: 30px; z-index: 99;	border: none; outline: none;	background-color: #FF8D1B; color: white; cursor: pointer; padding: 15px;			border-radius: 50%;");
		};

		function buttonCreation() {
			var btn = document.createElement("BUTTON");
			btn.setAttribute("id", "myBtn");
				var icon = document.createElement("span");
				icon.className = "glyphicon glyphicon-arrow-up";
			//document.getElementById("myBtn").innerHTML = icon
			btn.appendChild(icon);
			document.body.appendChild(btn);
			console.log(icon);
		}

		function topFunction() {
			console.log("click registered")
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}

		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById("myBtn").style.display = "block";
			} else {
				document.getElementById("myBtn").style.display = "none";
			}
		}


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  Cookies
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#eaf7f7",
      "text": "#5c7291"
    },
    "button": {
      "background": "#56cbdb",
      "text": "#ffffff"
    }
  },
  "content": {
    "message": "This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies. Find out more.",
    "dismiss": "Got it!",
    "link": "Learn More"
  }
})
});

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  Tri des films
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


function filterMovies(genre, valeur) {
  var genreMovie = document.getElementsByClassName(genre);
  for (var i = 0; i < genreMovie.length; ++i) {
    genreMovie[i].style.display = valeur;
  }
}

document.getElementById("all-btn-movie").onclick = function() {
  filterMovies("movie", "block");
}

document.getElementById("actions-btn-movie").onclick = function() {
  filterMovies("movie", "none");
  filterMovies("actionMovie", "block");
}

document.getElementById("comedy-btn-movie").onclick = function() {
  filterMovies("movie", "none");
  filterMovies("comedyMovie", "block");
}

document.getElementById("scify-btn-movie").onclick = function() {
  filterMovies("movie", "none");
  filterMovies("scifyMovie", "block");
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  Tri des films
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


function filterSeries(genre, valeur) {
  var genreMovie = document.getElementsByClassName(genre);
  for (var i = 0; i < genreMovie.length; ++i) {
    genreMovie[i].style.display = valeur;
  }
}

document.getElementById("all-btn-serie").onclick = function() {
  filterSeries("serie", "block");
}

document.getElementById("actions-btn-serie").onclick = function() {
  filterSeries("serie", "none");
  filterSeries("actionSerie", "block");
}

document.getElementById("comedy-btn-serie").onclick = function() {
  filterSeries("serie", "none");
  filterSeries("comedySerie", "block");
}

document.getElementById("scify-btn-serie").onclick = function() {
  filterSeries("serie", "none");
  filterSeries("scifySerie", "block");
}

document.getElementById("drama-btn-serie").onclick = function() {
  filterSeries("serie", "none");
  filterSeries("dramaSerie", "block");
}

/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  First Five Movies
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

function trytest() {

var title = document.getElementsByClassName("movie-series-title");
var movieTitle = document.getElementById("modal-movie-title");

movieTitle.innerHTML = title;
console.log(title);

}
