function reponse() {
    var blanc = document.getElementById('blanc').checked;
    var rouge = document.getElementById('rouge').checked;
    var vert = document.getElementById('vert').checked;
    
    var resultat = document.getElementById("resultat")
    if(blanc==true) {
   	resultat.innerHTML = "Bonne réponse, vous avez répondu blanc";
    }
    else if(rouge==true) {
   	resultat.innerHTML = "La réponse est fausse, vous avez répondu rouge ";
    }
    else {
   	resultat.innerHTML = "La réponse est fausse, vous avez répondu vert";
    }
}