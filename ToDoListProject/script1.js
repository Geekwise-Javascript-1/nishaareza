var loginEl = document.getElementById('login');

var click =localStorage.getItem('userno');
function createLoginForm(){
var user ='nisha';
var loginForm =

  '<form id="form">'+
       '<input id = "btn1"type ="button" value = "Click Here To Sign Up" style="height:30px;width:300px">'+
       '<br /><label for ="user">Username <br /> '+
       '<input type="text" id="user" value="'+user+'" size ="45"><br /> <br />'+
       '</label><br />'+
       '<label for = "password">Password <br /> '+
         '<input type="password" id="pass"size = "45" ><br />'+
         '</label>'+
         '<br /><input type ="submit" value ="Login" style="height:30px;width:300px"><br />'+
         '<input id = "btn2" type ="button" value = "Sign Up" style="height:30px;width:300px">'+

   '</form>';

   loginEl.innerHTML = loginForm;
   return;
}

createLoginForm();


var form = document.querySelector('form');
var submitBtn= document.querySelector('input[type="submit"]');
var inputBtn= document.getElementById('btn1');
var signupBtn= document.getElementById('btn2');

submitBtn.addEventListener('click',loginTodo);
inputBtn.addEventListener('click',createField);
signupBtn.addEventListener('click',setStorage);
console.log(submitBtn);

function setStorage(e){
   e.preventDefault();
   if(form.elements[1].value !=="" && form.elements[2].value !=="" && form.elements[3].value===form.elements[2].value){
     click++;
     localStorage.setItem('user'+click,form.elements[1].value);
     localStorage.setItem('userno',click);
     localStorage.setItem('pass'+click,MD5(form.elements[2].value));
     localStorage.setItem('loginlist',false);
     window.location.href = "index1.html";
   }
   else {
      alert("Enter  username & password!");
   }
}

function loginTodo(e){
   e.preventDefault();
   for(var i=0;i <=click;i++){
    //  console.log(click);
      if (localStorage.getItem('user'+i) === form.elements[1].value && localStorage.getItem('pass'+i) === MD5(form.elements[2].value)){
     localStorage.setItem('usernum',i);
      localStorage.setItem('loginlist',true);
     window.location.href = "index1.html";
   }
   else {
     alert("Please enter the correct password or sign up")
   }
  }
}
function createField(){
   var newLabel = document.createElement('label');
   newLabel.setAttribute("for","generic");
   newLabel.innerHTML = "password<br />";

   var newInput = document.createElement('input');
   newInput.id ="pass";
   newInput.name ="generic";
   newInput.type ="password";
   newInput.innerHTML="password <br />";
   newInput.size ="45";

   newLabel.appendChild(newInput);
   form.appendChild(newLabel);
   form.insertBefore(newLabel,submitBtn);
}
