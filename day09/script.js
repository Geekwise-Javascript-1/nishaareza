var loginEl = document.getElementById('login');
//loginEl.textContent = "hello";
function createLoginForm(repeat){
  var user ='';
  if(repeat){
    user = localStorage.getItem('username');
  }
var loginForm =
  '<form>'+
     '<label for = "user">Username:'+
      ' <input type="text" id="user" value="'+user+'">'+
       '</label>'+
       '<label for = "password">Password:'+
         '<input type="password" id="pass">'+
         '</label>'+
         '<input type ="submit" value = "submit">'+
   '</form>';
   loginEl.innerHTML = loginForm;

   return;
}




   function setStorage(e){
     e.preventDefault();

//     console.log(form.elements.pass.value);
     localStorage.setItem('username',form.elements.user.value);
     localStorage.setItem('password',MD5(form.elements.pass.value));
     /*storageArr = [];
     for( var i=0; i<form.elements.length -1; i++){
       storageArr.push(form.elements[i].value);
     }
     localStorage.setItem('creds',storageArr);*/
//   sessionStorage.setItem('color','red');
//   localStorage.setItem('color',red);
}

if (!localStorage.getItem('username') && !localStorage.getItem('password')){
  createLoginForm(false);
  alert('Please enter your User Name and Password to Proceed');
  var form = document.querySelector('form');
  var submitBtn = document.querySelector('input[type="submit"]');
 submitBtn.addEventListener('click',setStorage);
 sessionStorage.setItem('repeat',true);

}else if(localStorage.getItem('username') && localStorage.getItem('password')){
  alert('Welcome back  '+localStorage.getItem('username')+'    Please enter your password');
  createLoginForm(true);
  var form = document.querySelector('form');
  var submitBtn = document.querySelector('input[type="submit"]');
   submitBtn.addEventListener('click',checkStorage);
//   loginEl.remove();

}

function checkStorage(e){
  e.preventDefault();
  if(MD5(form.elements.pass.value) === localStorage.getItem('password')){
    alert('Acessgranted');
  }else {
      alert('please check you password');
    }

}
