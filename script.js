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
  Login window
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/





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