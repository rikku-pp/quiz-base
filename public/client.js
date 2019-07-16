
// Step 1. Declare variables
var wording;
var answer1;
var answer2;
var answer3;
var answer4;
var hintLink;

//Step 2. Set Up Question Component
var question1 = createQuestion(1);
document.body = document.createElement('body');
document.body.appendChild(question1);

//Step 3. Add custom content
wording.textContent = "How many legs does a cat have?";
answer1.textContent = "Zero";
answer2.textContent = "Four";
answer3.textContent = "Five";
answer4.textContent = "42";
hintLink.textContent = "Ask Yahoo";
hintLink.setAttribute('href', "https://answers.yahoo.com/question/index?qid=20081229213311AAmSi8Y");
hintLink.setAttribute('target', "_blank");

//  Step 4. Add responses
//Set Popup Messages
var responseText1 = "Hmpfh! It might look like that 😾";
var responseText2 = "Yes! My cat too! 😺";
var responseText3 = "Uhm, actually, that fifth limb is the tail 😿";
var responseText4 = "What that looks like, I Don't Even Know! 🙀";

//Declare Factory Function (see: createResponse.js)
//Set Up Response Components, providing message and image
var response1 = createResponse(responseText1, cat0); 
var response2 = createResponse(responseText2, cat4); 
var response3 = createResponse(responseText3, cat5); 
var response4 = createResponse(responseText4, cat_); 
document.body.appendChild(response1);
document.body.appendChild(response2);
document.body.appendChild(response3);
document.body.appendChild(response4);

//Callback Function
function showResponse (responseDiv) {
  responseDiv.setAttribute('style', 'display:block');
  responseDiv.setAttribute('class', 'my-popup my-animation');
}

//Connect response display to clicking answers
answer1.addEventListener('click', showResponse.bind(null, response1));
answer2.addEventListener('click', showResponse.bind(null, response2));
answer3.addEventListener('click', showResponse.bind(null, response3));
answer4.addEventListener('click', showResponse.bind(null, response4));

//Callback Function
function hideResponse (responseDiv) {
  responseDiv.setAttribute('style', 'display:none');
  responseDiv.setAttribute('class', 'my-popup'); 
}

//Connect response hiding to clicking responses
response1.addEventListener('click', hideResponse.bind(null, response1));
response2.addEventListener('click', hideResponse.bind(null, response2));
response3.addEventListener('click', hideResponse.bind(null, response3));
response4.addEventListener('click', hideResponse.bind(null, response4));

