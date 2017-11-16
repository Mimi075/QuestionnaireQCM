function reponse() {
    var blanc = document.getElementById('blanc').checked;
    var rouge = document.getElementById('rouge').checked;
    var vert = document.getElementById('vert').checked;
    
    var resultat = document.getElementById("resultat")
    if(blanc==true) {
   	resultat.innerHTML = "La réponse est blanc";
    }
    else if(rouge==true) {
   	resultat.innerHTML = "La réponse est rouge";
    }
    else {
   	resultat.innerHTML = "La réponse est vert";
    }
}