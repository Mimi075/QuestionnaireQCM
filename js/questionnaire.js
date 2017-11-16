function reponse() {
    var blanc = document.getElementById('blanc').checked;
    var rouge = document.getElementById('rouge').checked;
    var vert = document.getElementById('vert').checked;
    var resultat = document.getElementById("resultat");

    switch (true) {
    	case blanc:
    		resultat.innerHTML = "Bonne réponse, vous avez répondu blanc";
    		break;
    	case rouge:
    		resultat.innerHTML = "Mauvaise réponse, vous avez répondu rouge";
    		break;
    	case vert:
    		resultat.innerHTML = "Mauvaise réponse, vous avez répondu vert";
    		break;
    	default:
    		// statements_def
    		break;
    }