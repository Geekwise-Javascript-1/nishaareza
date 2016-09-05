var submitBtn = document.getElementById('submit');
var form = document.getElementsByTagName('form')[0];
 var valArr = [];
 var btn;

submitBtn.onclick =getVals;

function getVals(e){
//  alert('getting the values');
e.preventDefault();
 console.log(form.elements);


for(var i=0; i < form.elements.length - 1; i++){
  valArr.push(form.elements[i].value);
  console.log(form.elements[i].value);
 }
 valArr.pop();
 console.log(valArr);
}

 var lis = document.getElementsByTagName('li');
 for(i=0; i < lis.length; i++){
   lis[i].addEventListener('click',function(e) {
     console.log(e);
//     alert('works');
console.log(e.target.textContent);
//console.log(e.currentTarget);
console.log(e.currentTarget.textContent);
console.log(this.textContent);
   });
 }
 //console.log(lis);
//logName('Matt');
//function logName(name){
//  console.log(name);
//}

//foo('matt');
//console.log(foo);

//var foo = function() {
//  console.log(arguments{[1]);
//}('matt',5,['green','day',3]);
//foo('matt');
//current form output includes submit button value
//modify code to remove submit button from array
//output array to console
///btn.onclick = addVals;
var inputEl = document.createElement('input');
inputEl.id ='newId';
inputEl.name = 'new';
inputEl.type = 'email';
inputEl.placeholder ='example@email.com';
form.appendChild(inputEl);
btn  = document.getElementById('button');
//console.log(inputEl);
btn.onclick = addVals;
function addVals(){
  valArr.push(inputEl.value);

//document.body.appendChild(inputEl);
console.log(inputEl.value);
console.log(valArr);
}





//on "click to add more" button
//append new instance of inputEl to form


//add submit button back into form
//ensure that each instance is appended BEFORE submit
//modify every dynamic instance to be textContent
//on submit output to console new array of values
