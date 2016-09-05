var theForm = document.getElementsByTagName('form')[0];
var    submit = document.querySelector('input[type ="submit"]');
var    addField = document.getElementById('button');

addField.addEventListener('click',createField);
var incNum = 1;
function createField(){

   var newLabel = document.createElement('label');
   newLabel.setAttribute("for","generic");
   newLabel.innerHTML = "Generic Label";

   var newInput = document.createElement('input');
   newInput.id ="generic";incNum++;
   newInput.name ="generic";
   newInput.type ="text";
   newInput.placeholder ="Generic input box ";


   addToForm(newLabel,newInput);
   incNum++;
//   document.body.appendChild(newLabel);

}
function addToForm(newLabel,newInput){
  newLabel.appendChild(newInput);
theForm.appendChild(newLabel);
theForm.insertBefore(newLabel,submit);
}
addField.addEventListener('click',createField);

function getInputVals(e){
  e.preventDefault();
  var inputs = [];
  for(var i=0; i< theForm.elements.length - 1; i++){
    inputs.push(theForm.elements[i].value);
  }
  console.log(inputs);

}

submit.addEventListener('click',getInputVals);
