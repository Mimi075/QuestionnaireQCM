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
	var reponse1 = "Réponse 1";
	var reponse2 = "Réponse 2";

	function ajouterReponse ()

	questionList.innerHTML = '';
	for (var i = 0; i < questions.length; i++) {
		questionList.innerHTML += '<li>'+questions[i]+'&nbsp;<button onclick="removeQuestion('+i+');">Sup</button>'+'<br><label for="checkBox1">'+reponse1+ '</label><input id="checkBox1" type="checkbox"><br><label for="checkBox2">'+reponse2+ ' </label><input id="checkBox2" type="checkbox"><br>'+ajouterReponse()+'</li>';
	}
}

document.getElementById('ajoutQuestionBtn').addEventListener('click', addQuestion);



