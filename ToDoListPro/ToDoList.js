var theForm = document.getElementsByTagName('form')[0];
var submit =  document.querySelector('input[type ="submit"]');
var inc = 0;
//Button to Display ToDO list
var displayList = document.getElementById('btn1');
//Button to Remove a Task from ToDo list
var removeItem  = document.getElementById('btn2');
//Button to Update a Task in the List
var updateItem  = document.getElementById('btn3');
//Table to Display the ToDo list
var toDotab = document.getElementById('toDoTable');
//Boolean variable indicating Task needs update or not
var upItem = false;
var disItem = false;
//Boolean Variable indicating if user wants to add more Tasks than total number indicated
var response = false;

//inputs is 2Dimensional Array where the To Do List is stored.
 var num = prompt(' How many To DO Task?');
 var inputs = create2DArray(num++);
 num--;

//Function to store the To Do List in inputs Array.
function getInputVals(e){
     e.preventDefault();
     //Copy Items from Form to Array
     if(inc < num){
       for(var i=0; i< theForm.elements.length - 1; i++){
            inputs[inc].push(theForm.elements[i].value);
       }
    // If Task needs update or to add more than first specified number of tasks
   if (upItem === true || response === true){
     var arrTemp = [];
     arrTemp = inputs[inc];
    if(disItem === true){
       createRow(arrTemp,inc);
    }
    upItem = false;
    response = false;
 }
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
//When Submit button in form is called to save the tasks
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

//Function to display task in table
function displayListtodo(){
    var arrTemp = [];


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

//Function to create and display single Task in the table
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
// Function to Delete a task.
function removeTask(){
   var taskToremove = prompt("Enter the task  you want to remove");
   var index = -1;
   var arrTemp = [];
   if(taskToremove !== ''){

   for(var i=0; i<=inc;i++){
   arrTemp = inputs[i];
   index = arrTemp.indexOf(taskToremove);
   if(index > -1){
     index = i;
     console.log(index);
     var k = index + 1;
     //task will be removed from table and inputs array
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

//Function to Update task
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
  if(index > -1){
    index = i;
    console.log(index);
    inputs.splice(index, 1);
    var k = index + 1;
    toDoTable.deleteRow(k);

    inc--;
    //Task to be updated will be displayed in form and user can edit and save
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
