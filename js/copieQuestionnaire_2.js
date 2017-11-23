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


	questionList.innerHTML = '';
	for (var i = 0; i < questions.length; i++) {
		questionList.innerHTML += '<li>'+questions[i]+'&nbsp;<button onclick="removeQuestion('+i+');">Sup</button>'+'<br><label for="checkBox1">'+reponse1+ '</label><input id="checkBox1" type="checkbox"><br><label for="checkBox2">'+reponse2+ ' </label><input id="checkBox2" type="checkbox"></li><br><input type="text" class="form-control" id="questionSupp" placeholder="Votre question"><button id="addQuestionSupp" onclick="addQuestionSupp('+i+');">Add</button>';
	}
}

////////////////////////////////// REPONSE /////////////////////////////////////
var questionsSupp = [];

function addQuestionSupp() {
	reponseList.innerHTML = '';
	questionsSupp.push(document.getElementById('questionSupp').value);
	for (var i = 0; i < questionsSupp.length; i++) {
	reponseList.innerHTML += '<li>'+questionsSupp[i]+'&nbsp;<button onclick="removeQuestionSupp('+i+');">Sup</button></li>';
}}

function removeQuestionSupp (position) {
	questionsSupp.splice(position, 1);
	showQuestionSupList();
}
function showQuestionSupList() {
	var reponseList = document.getElementById('reponseList');
	reponseList.innerHTML = '';
	for (var i = 0; i < questionsSupp.length; i++) {
		reponseList.innerHTML += '<li>'+questionsSupp[i]+'</li>';
	}
}
document.getElementById('ajoutQuestionBtn').addEventListener('click', addQuestion);


