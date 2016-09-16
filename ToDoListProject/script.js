var form = document.getElementsByTagName('form')[0];
var submit =  document.querySelector('input[type ="submit"]');


submit.addEventListener('click',setStorage);

function setStorage(e){
   e.preventDefault();

   console.log(form.elements[0].value);

   if( form.elements[0].value !=="" && form.elements[1].value !=="" && form.elements[2].value===form.elements[2].value){

     localStorage.setItem('user'+0,form.elements[0].value);
     localStorage.setItem('userno',0);
     localStorage.setItem('pass'+0,MD5(form.elements[1].value));
     localStorage.setItem('loginlist',false);
     window.location.href = "index1.html";
  }
  else {
    alert("Enter  username & password!");
  }
}
