/*
  <div class="my-popup">
    <div class="my-overlay my-bg">
      <img />
    </div>
    <div class="my-overlay my-text">text</div>
  </div>
*/
function createResponse (rawText, imageString) {
  
  //The variables to be used
  var popupDiv, img, imgDiv, textDiv;
  
  //create each Element/tag
  popupDiv = document.createElement('div');
  imgDiv = document.createElement('div');
  img = document.createElement('img');
  textDiv = document.createElement('div');
  
  //assign them styles declared separately
  popupDiv.setAttribute('class', 'my-popup');
  imgDiv.setAttribute('class', 'my-overlay my-bg');
  textDiv.setAttribute('class', 'my-overlay my-text');
  
  //set the content according to parameters
  textDiv.textContent = rawText;
  img.src = imageString;

  //attach the subcomponents, so they will follow along its "parent"
  popupDiv.appendChild(imgDiv);
  popupDiv.appendChild(textDiv);
  imgDiv.appendChild(img);
  
  //returns the parent div
  return popupDiv;
}

