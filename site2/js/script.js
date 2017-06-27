
var totalPanier = 0;
var tabProduct = new Array();

function product (nom, prix, nomID, quantite) {
  this.nom = nom;
  this.prix = prix;
  this.nomID = nomID;
  this.quantite = quantite;
}

tabProduct[0] = new product("keychain", 10, "input-keychain", 0);
tabProduct[1] = new product("peluche", 20, "input-peluche", 0);
tabProduct[2] = new product("tshirt", 15, "input-tshirt", 0);
tabProduct[3] = new product("bluray", 25, "input-bluray", 0);
tabProduct[4] = new product("statuette", 80, "input-statuette", 0);
tabProduct[5] = new product("bed", 30, "input-bed", 0);
tabProduct[6] = new product("lego", 45, "input-lego", 0);
tabProduct[7] = new product("videogames", 25, "input-videogames", 0);

function addToPanier(pProduct) {
  var totalProduct = document.getElementById(pProduct.nomID).value;
  pProduct.quantite = totalProduct;
  totalPanier += pProduct.prix * pProduct.quantite;

  document.getElementById("panier").style.display = "block";
  document.getElementById("montant-panier").innerHTML = totalPanier + "€";

}

function viderPanier() {
  totalPanier = 0;
  document.getElementById("montant-panier").innerHTML = "Vide";
}

function exitPanier() {
  document.getElementById("panier").style.display = "none";
}

// ####################################### Formulaire de contact #################################

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
  else {
    document.getElementById("name").style.backgroundColor = "#FFF ";
    document.getElementById("alert-name").style.display = "none";
  }
  if (firstnameContact === "") {
    document.getElementById("firstname").style.backgroundColor = "#e74c3c ";
    document.getElementById("alert-firstname").style.display = "block";
    document.getElementById("submitBtn").attributes.removeNamedItem("data-target");
  }
  else {
    document.getElementById("firstname").style.backgroundColor = "#FFF ";
    document.getElementById("alert-firstname").style.display = "none";
    document.getElementById("submitBtn").attributes.setNamedItem("data-target");
  }
  if (emailContact === "") {
    document.getElementById("email").style.backgroundColor = "#e74c3c ";
    document.getElementById("alert-email").style.display = "block";
    document.getElementById("submitBtn").attributes.removeNamedItem("data-target");
  }
  else {
    document.getElementById("email").style.backgroundColor = "#FFF ";
    document.getElementById("alert-email").style.display = "none";
  }
  if (messageContact === "") {
    document.getElementById("message").style.backgroundColor = "#e74c3c ";
    document.getElementById("alert-message").style.display = "block";
    document.getElementById("submitBtn").attributes.removeNamedItem("data-target");
  }
  else {
    document.getElementById("message").style.backgroundColor = "#FFF ";
    document.getElementById("alert-message").style.display = "none";
    document.getElementById("submitBtn").attributes.setNamedItem("data-target");
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
