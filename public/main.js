// l'url de requête de serveur datamuse
const url = 'https://api.datamuse.com/words?';
//recherchera des mots qui décrivent un autre mot depuis l'API datamuse
const queryParams = 'rel_jjb=';
//& sert à séparer nos paramètres
//= joindra la clé 'topics'à une valeur.
const additionalParams = '&topics=';
// récupération les id depuis html 
//récupére la saisie de l'utilisateur
const inputField = document.querySelector('#input');
//récupére la saisie de l'utilisateur
const topicField = document.querySelector('#topic');
//soumettre le formulaire
const submit = document.querySelector('#submit');
//champs permettant d'affocher la réponse de la requête
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  //récupérer la valeur saisie par l'utilisateur depuis le champs input
  const wordQuery = inputField.value;
  //récupérer la valeur saisie par l'utilisateur depuis le champs topic
  const topicQuery = topicField.value;
  //La composition finale de la requête de form : 'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'.
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  
  //création de la requête
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  //La méthode de la requête suivi de la requête finale endpoint
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
