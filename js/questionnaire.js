function reponse() {
	var resultat = document.getElementById("resultat");
	
	if ( document.getElementById('blanc').checked ) {
		resultat.innerHTML = "Bonne réponse, vous avez répondu blanc";
	} else if ( document.getElementById('rouge').checked ) {
		resultat.innerHTML = "Mauvaise réponse, vous avez répondu rouge";
	} else if ( document.getElementById('vert').checked ) {
		resultat.innerHTML = "Mauvaise réponse, vous avez répondu vert";
	} else {

	}
}
