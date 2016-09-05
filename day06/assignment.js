var submitBtn = document.getElementById('submit');
var form = document.getElementsByTagName('form')[0];
 var valArr = [];
 var btn;

submitBtn.onclick =getVals;

function getVals(e){
  e.preventDefault();

for(var i=0; i < form.elements.length - 1; i++){
  valArr.push(form.elements[i].value);
//  console.log(form.elements[i].value);
  }
  valArr.pop();
  console.log(valArr);
 }

btn  = document.getElementById('button');
//console.log(inputEl);
  btn.onclick = addVals;
  function addVals(){
  var inputEl = document.createElement('input');
  inputEl.id ='newId';
  inputEl.name = 'new';
  inputEl.type = 'text';
  inputEl.placeholder ='Hobby';
  form.appendChild(inputEl);
  valArr.push(inputEl.value);

  console.log(inputEl.value);
  console.log(valArr);
}





//on "click to add more" button
//append new instance of inputEl to form


//add submit button back into form
//ensure that each instance is appended BEFORE submit
//modify every dynamic instance to be textContent
//on submit output to console new array of values
