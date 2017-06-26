/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  Vérifier l'age
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

  function verifAge() {
  	var age = document.getElementById("inputAge").value;
  	var modalAge = document.getElementById("myModal");

  	if (age < 18) {
  		alert("Hop hop hop! Redirection en cours!");
  		window.location.assign("site2.html");
  	}
  	else {
  		alert("Welcome");
  		window.location.assign("enter.html");
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
  Slider shop
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

  
