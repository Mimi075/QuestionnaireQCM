var questions = []; 

function addQuestion() {
	questions.push(document.getElementById('question').value);
	document.getElementById('question').value = '';
	showQuestionList();
}

function removeQuestion(position) {
	questions.splice(position, 1);
	showQuestionList();
}

function showQuestionList() {
	var questionList = document.getElementById('questionList');
	questionList.innerHTML = '';
	for (var i = 0; i < question.length; i++) {
		questionList.innerHTML += '<li onclick="removeQuestion('+i+');">'+question[i]+'</li>';
	}
}

document.getElementById('ajoutQuestionBtn').addEventListener('click', addQuestion);



/*function reponse() {
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
*/