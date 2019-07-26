const buttonArt = document.getElementById('button-art');
const buttonScience = document.getElementById('button-science');
const mainMenu = document.getElementById('main-menu');
const showQuestionsArt = document.getElementById('show-questions-art');
const showQuestionsScience = document.getElementById('show-questions-science');
const buttonResultArt = document.getElementById('button-result-art');
const buttonResultScience = document.getElementById('button-result-science');
const buttonStart = document.getElementById('button-start');
const welcome = document.getElementById('bienvenida');
const artResult = document.getElementById('art-result');
const scienceResult = document.getElementById('science-result');

const userName = document.getElementById('input-name').value;

const menu = () => {
  /**/
  welcome.classList.add('disappear');
  mainMenu.classList.remove('disappear');
  const userName = document.getElementById('input-name').value;
  /*console.log(userName);*/
  document.getElementById('user-name').innerHTML += 'Bienvenidx, ' + userName;
}

const triviaArt = () => {

  showQuestionsArt.classList.remove('disappear');
  mainMenu.classList.add('disappear');
}

const triviaScience = () => {

  showQuestionsScience.classList.remove('disappear');
  mainMenu.classList.add('disappear');
}


const resultTriviaArt = () => {
  showQuestionsArt.classList.add('disappear');
  artResult.classList.remove('disappear');
  document.getElementById('score1').innerHTML += '';
  document.getElementById('score2').innerHTML += '';
  let correctas = 0;
  const respA1 = document.getElementById('form-question1-art').value;
  const respA2 = document.getElementById('form-question2-art').value;
  const respA3 = document.getElementById('form-question3-art').value;
  const respA4 = document.getElementById('form-question4-art').value;
  if (respA1 === "A1") {
    correctas++;
  }
  if (respA2 === "B1") {
    correctas++;
  }
  if (respA3 === "C1") {
    correctas++
  }
  if (respA4 === "D1") {
    correctas++
  }
  const errores = (4 - correctas);
  document.getElementById('score1').innerHTML += '\n Aciertos: ' + correctas + '\n' + 'Errores:' + errores;

}

const resultTriviaScience = () => {
  showQuestionsScience.classList.add('disappear');
  scienceResult.classList.remove('disappear');
  document.getElementById('score1').innerHTML += '';
  document.getElementById('score2').innerHTML += '';
  let correctas = 0;
  const respS1 = document.getElementById('form-question1-science').value;
  const respS2 = document.getElementById('form-question2-science').value;
  const respS3 = document.getElementById('form-question3-science').value;
  const respS4 = document.getElementById('form-question4-science').value;
  /*console.log(respS1);*/
  if (respS1 === "E4") {
    correctas++;
  }
  if (respS2 === "F3") {
    correctas++;
  }
  if (respS3 === "G3") {
    correctas++
  }
  if (respS4 === "H4") {
    correctas++
  }
  const errores = (4 - correctas);
  document.getElementById('score2').innerHTML += '\n Aciertos: ' + correctas + '\n' + 'Errores:' + errores;

}


buttonArt.addEventListener('click', triviaArt);
buttonScience.addEventListener('click', triviaScience);
buttonResultArt.addEventListener('click', resultTriviaArt);
buttonResultScience.addEventListener('click', resultTriviaScience);
buttonStart.addEventListener('click', menu);
buttonPlayAgain.addEventListener('click', playAgain);
