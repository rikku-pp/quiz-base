
/*
    Function createQuestion: 
    -prepares the component, but doesn't put it on display
    Parameter: id
    -can be number and/or characters
    -will be used as title for the question
    Returns: reference to the HTML-element for the card
*/
function createQuestion(id) {
  
  var container, head, title, list, hint;
  //vars to be declared outside: wording, hintLink, answer1,2,..
  
  container = document.createElement('div');
  container.setAttribute('class', 'card');
  container.setAttribute('id', id);
  
  head = document.createElement('div');
  head.setAttribute('class', 'card-block');
  
  title = document.createElement('h4');
  title.setAttribute('class', 'card-title');
  title.textContent = "Question " + id;
  
  wording = document.createElement('p');
  wording.setAttribute('class', 'card-text');
  
  list = document.createElement('ul');
  list.setAttribute('class', 'list-group list-group-flush');
  
  answer1 = document.createElement('li');
  answer1.setAttribute('class', 'list-group-item');
  answer2 = document.createElement('li');
  answer2.setAttribute('class', 'list-group-item');
  answer3 = document.createElement('li');
  answer3.setAttribute('class', 'list-group-item');
  answer4 = document.createElement('li');
  answer4.setAttribute('class', 'list-group-item');
  
  hint = document.createElement('div');
  hint.setAttribute('class', 'card-block');
  hintLink = document.createElement('a');
  hintLink.setAttribute('class', 'card-block');
  
  container.appendChild(head);
  head.appendChild(title);
  head.appendChild(wording);
  container.appendChild(list);
  list.appendChild(answer1);
  list.appendChild(answer2);
  list.appendChild(answer3);
  list.appendChild(answer4);
  container.appendChild(hint);
  hint.appendChild(hintLink);
  
  return container;
}