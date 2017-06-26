function sendContact() {
  var nameContact = document.getElementById("name").value;
  var firstnameContact = document.getElementById("firstname").value;
  var emailContact = document.getElementById("email").value;
  var subjectContact = document.getElementById("subject").value;
  var messageContact = document.getElementById("message").value;

  document.getElementById("name-modale").innerHTML =
    "Bonjour " + firstnameContact +" ! <br /><br /> Voici ce qui va nous être envoyé. Si tout est correct, veuillez confirmer en cliquant sur le bouton d'envoi.<br /> "
    + "<br />Nom : " + nameContact + "<br />Prénom : " + firstnameContact + "<br />Adresse email : " + emailContact + "<br />Sujet : " + subjectContact + "<br />Message : " + messageContact;


  if (nameContact === "") {
    document.getElementById("name").style.backgroundColor = "#e74c3c ";
    document.getElementById("alert-name").style.display = "block";
    document.getElementById("submitBtn").attributes.removeNamedItem("data-target");
  }
  if (firstnameContact === "") {
    document.getElementById("firstname").style.backgroundColor = "#e74c3c ";
    document.getElementById("alert-firstname").style.display = "block";
    document.getElementById("submitBtn").attributes.removeNamedItem("data-target");
  }
  if (emailContact === "") {
    document.getElementById("email").style.backgroundColor = "#e74c3c ";
    document.getElementById("alert-email").style.display = "block";
    document.getElementById("submitBtn").attributes.removeNamedItem("data-target");
  }
  if (messageContact === "") {
    document.getElementById("message").style.backgroundColor = "#e74c3c ";
    document.getElementById("alert-message").style.display = "block";
    document.getElementById("submitBtn").attributes.removeNamedItem("data-target");
  }

}

function submitGood() {
  alert("Le message a bien été envoyé !");
}


function verifEmpty() {

    if (nameContact === "") {
      document.getElementById("name").style.backgroundColor = "#e74c3c ";
      document.getElementById("alert-name").style.display = "block";
      document.getElementById("submitBtn").attributes.removeNamedItem("data-target");
  }
}
