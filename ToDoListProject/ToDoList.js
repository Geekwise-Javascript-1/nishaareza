var theForm = document.getElementsByTagName('form')[0];
var submit =  document.querySelector('input[type ="submit"]');
var inc = 0;
//Button to Display ToDO list
var displayList = document.getElementById('btn1');
//Button to Remove a Task from ToDo list
var removeItem  = document.getElementById('btn2');
//Button to Update a Task in the List
var updateItem  = document.getElementById('btn3');
//Button to Save the List
var saveItem  =  document.getElementById('btn4');
//Button to log out of the List
var logoutToDo =  document.getElementById('btn5');
//Table to Display the ToDo list
var toDotab = document.getElementById('toDoTable');
//var tablePointer = document.getElementById('table');

//Boolean variable indicating Task needs update or not
var upItem = false;
var disItem = false;
//Boolean Variable indicating if user wants to add more Tasks than total number indicated
var response = false;

var n = localStorage.getItem('userno');
var number =localStorage.getItem('usernum');
//inputs is 2Dimensional Array where the To Do List is stored.
var num;
var inputs;
var loginBool = localStorage.getItem('loginlist');
if(loginBool === 'false' ){
 num = prompt(' How many To DO Tasks   '+localStorage.getItem('user'+n) +'?');
 inputs = create2DArray(num++);
 num--;
} else {
         var usernum = localStorage.getItem('usernum');
         localStorage.getItem('ToDo'+usernum);
         num =localStorage.getItem('taskno'+usernum);
         inputs = create2DArray(num++);
         num--;
         var array = [];

         var input = localStorage.getItem('ToDo'+usernum);
          array = input.split(",");

          var j = 0;
          var arrTemp = [];

          for(i=0; i < num*4; i = i+4){

             arrTemp = array.slice(i,i+4);
             console.log(arrTemp);
          for(k=0;k<4;k++){
            inputs[j].push(arrTemp[k]);
          }
          createRow(arrTemp,j);

          j++;
          }
    console.log(inputs);
    inc = num-1;
    disItem = true;
  }
//Function to store the To Do List in inputs Array.
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

 }
 }
}

submit.addEventListener('click',getInputVals);
// Creating a two dimensional Array to store To DO LIst
function create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
 displayList.addEventListener('click',displayListtodo);

function displayListtodo(){
    var arrTemp = [];
    console.log(inc);

 for(var j =0; j< inc ; j++){
   if(disItem === true){
     var k =j +1;
     toDotab.deleteRow(k)
   }
   arrTemp = inputs[j];
   createRow(arrTemp,j);
}
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
   if(taskToremove !== ''){

   for(var i=0; i<=inc;i++){
   arrTemp = inputs[i];
   console.log(arrTemp);
   index = arrTemp.indexOf(taskToremove);
   console.log(index);
   if(index > -1){
     index = i;
     console.log(index);
     var k = index + 1;
     toDoTable.deleteRow(k);
     inputs.splice(index, 1);
     inc--;num--;
     return;
     }
    }
  }
  else
    {
      alert("enter a valid Task");
    }

}
updateItem.addEventListener('click',updateTask);

function updateTask(){
  var taskToupdate = prompt("Enter the task to be updated");
  var index = -1;
  var arrTemp = [];
  if(taskToupdate !== ''){
  console.log(taskToupdate);
  alert("make changes in the form and submit");

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
    inputs[inc] = [];
    upItem = true;
    return;
    }
  }
   }
   else {
     alert("Enter a valid task!");
   }
 }
   saveItem.addEventListener('click',saveTask);

   function saveTask(){
       var click;
     if(localStorage.getItem('loginlist') === 'false'){
          click =localStorage.getItem('userno');
    }
    else {
      {
        click =localStorage.getItem('usernum');
      }
    }
     localStorage.setItem('ToDo'+click,inputs);
     localStorage.setItem('taskno'+click,num);
     console.log(inputs);

   }
   logoutToDo.addEventListener('click',logoutList);

   function logoutList(){

       localStorage.setItem('loginlist',false);
       window.location.href = "index2.html";
   }
