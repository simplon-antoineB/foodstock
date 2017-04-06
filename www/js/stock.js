$(document).ready(function () {
    setStock();
    getStock();

});

function setStock() {
    var banane = {
        "Nom": "Banane",
        "Quantite": "2",
        "Poids": ""
    };
    var pate = {
        "Nom": "Pâtes",
        "Quantite": "3",
        "Poids": "500gr"
    };

    localStorage.setItem("banane", JSON.stringify(banane));
    localStorage.setItem("pate", JSON.stringify(pate));
}

function getStock() {

    var nbElement = localStorage.length;
    var nom;
    var quantite;
    var poids;
    var content;

    for ( var i = 0; i < nbElement; i++ ) {
        nom = JSON.parse(localStorage.getItem(localStorage.key(i))).Nom;
        quantite = JSON.parse(localStorage.getItem(localStorage.key(i))).Quantite;
        poids = JSON.parse(localStorage.getItem(localStorage.key(i))).Poids;
        content = '<li class=" collection-item ">' + nom + ' - ' + quantite + ' - ' + poids + '</li>';
        $(content).appendTo("#stock");
    }
}