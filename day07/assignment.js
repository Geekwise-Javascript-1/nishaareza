var theForm = document.getElementsByTagName('form')[0];
var submit = document.querySelector('input[type ="submit"]');
var inc = 0;
var displayList = document.getElementById('btn1');
var removeItem  = document.getElementById('btn2');
var updateItem  = document.getElementById('btn3');
var toDotab = document.getElementById('toDoTable');
var upItem = false;
var disItem = false;
var response = false;

var num = prompt(' How many To DO ITEMS?');
var inputs = create2DArray(num++);
num--;
function getInputVals(e){
  e.preventDefault();
  console.log(inc);
  console.log(num);
  if(inc < num){
    for(var i=0; i< theForm.elements.length - 1; i++){
      inputs[inc].push(theForm.elements[i].value);
  }
  if (upItem === true || response === true){
    var arrTemp = [];
    arrTemp = inputs[inc];
    if(disItem === true){
    createRow(arrTemp,inc);
  }
    upItem = false;
    response = false;
 }

  console.log(inputs[inc]);
  inc++;
}
 else{
  response =  confirm("You wanted to log "+num+" Activities. Do you want to add more?");

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
    var arrTemp = [];


 for(var j =0; j< inc ; j++){
   if(disItem === true){
     var k =j +1;
     toDotab.deleteRow(k)
   }
   arrTemp = inputs[j];
//     table+= '<tr>';
     createRow(arrTemp,j);
/*     for(var c=0; c<4; c++){
      table+= '<td>' + arrTemp[c]+ '</td>';
    }
    table+= '</tr>';
    tablePointer.appendChild(table);
    console.log(inputs[j]);
    table ='';*/
  }
//  document.getElementById('btn1').innerHTML = html;
disItem= true;

}
function createRow(arrTemp,j){

    var row = toDotab.insertRow(++j);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    cell1.innerHTML = arrTemp[0];
    cell2.innerHTML = arrTemp[1];
    cell3.innerHTML = arrTemp[2];
    cell4.innerHTML = arrTemp[3];

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
     var k = index + 1;
     toDoTable.deleteRow(k);
     inputs.splice(index, 1);
     inc--;num--;
//     displayListtodo();
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
    var k = index + 1;
    toDoTable.deleteRow(k);

    inc--;
    for(var i=0; i< theForm.elements.length - 1; i++){
      theForm.elements[i].value = arrTemp[i];
    }
  //  num++;
    inputs[inc] = [];
    upItem = true;
  //  theForm.value = arrTemp;
  //  console.log(theForm.element.value);

//    displayListtodo();
    return;
    }
   }
}
