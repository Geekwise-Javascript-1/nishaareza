var theForm = document.getElementsByTagName('form')[0];
var submit = document.querySelector('input[type ="submit"]');
var inc = 0;
var displayList = document.getElementById('btn1');
var removeItem  = document.getElementById('btn2');
var updateItem  = document.getElementById('btn3');

var num = prompt(' How many To DO ITEMS?');
var inputs = create2DArray(num++);
num--;
function getInputVals(e){
  e.preventDefault();
  console.log(inc);
  console.log(num);
  if(inc <= num){
  for(var i=0; i< theForm.elements.length - 1; i++){
      inputs[inc].push(theForm.elements[i].value);
  }

  console.log(inputs[inc]);
  inc++;
 }
 else{
 var response =  confirm("You wanted to log "+num+" Activities. Do you want to add more?");

 if (response === true){
    num++;
   inputs[inc] = [];
//   console.log(response);
//   console.log(num);
 }
 }
}

submit.addEventListener('click',getInputVals);

function create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
 displayList.addEventListener('click',displayListtodo);
var tablePointer = document.getElementById('table');
function displayListtodo(){
  var table = '';
  var arrTemp = [];

  for(var j =0; j< inc ; j++){
    arrTemp = inputs[j];
     table+= '<tr>';
     for(var c=0; c<4; c++){
      table+= '<td>' + arrTemp[c]+ '</td>';
    }
    table+= '</tr>';
    tablePointer.appendChild(table);
    console.log(inputs[j]);
    table ='';
  }




//  document.getElementById('btn1').innerHTML = html;
}

removeItem.addEventListener('click',removeTask);

function removeTask(){
   var taskToremove = prompt("Enter the task  you want to remove");
   console.log(taskToremove);
   var index = -1;
   var arrTemp = [];
   for(var i=0; i<=inc;i++){
   arrTemp = inputs[i];
   console.log(arrTemp);
   index = arrTemp.indexOf(taskToremove);
   //console.log(index);
   if(index > -1){
     index = i;
     console.log(index);
     inputs.splice(index, 1);
     inc--;num--;
     displayListtodo();
     return;
     }
    }
}
updateItem.addEventListener('click',updateTask);

function updateTask(){
  var taskToupdate = prompt("Enter the task to be updated");
  console.log(taskToupdate);
  alert("make changes in the form and submit");
  var index = -1;
  var arrTemp = [];
  for(var i=0; i<=inc;i++){
  arrTemp = inputs[i];
  console.log(arrTemp);
  index = arrTemp.indexOf(taskToupdate);
  //console.log(index);
  if(index > -1){
    index = i;
    console.log(index);
    inputs.splice(index, 1);
    inc--;
    for(var i=0; i< theForm.elements.length - 1; i++){
      theForm.elements[i].value = arrTemp[i];
    }
  //  num++;
    inputs[inc] = [];
  //  theForm.value = arrTemp;
  //  console.log(theForm.element.value);

    displayListtodo();
    return;
    }
   }
}
