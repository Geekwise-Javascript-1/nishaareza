var loginNum = 0;
function Login(user){
  this.user = user;
  this.build = build;
}
function build() {
  loginNum++;
  var login =  document.getElementById('login');
  var h2 =     document.createElement('h2');
  var form =   document.createElement('form'),
      label1=  document.createElement('label'),
      input =  document.createElement('input'),
      label2 =  document.createElement('label'),
      pass =   document.createElement('input');
      submit = document.createElement('input');

      h2.textContent = 'Welcome to '+ this.user +'  login page';
      label1.setAttribute('for', 'user'+loginNum);
      label1.textContent ='username:';
      label2.setAttribute('for', 'user'+loginNum);
      label2.textContent ='password:';
      input.type = 'password';
      input.id = 'user'+loginNum;
      input.placeholder = 'username';
      pass.type ='text';
//      pass.id = 'password'+loginNum;
      pass.placeholder = '';
      submit.type = 'submit';
      submit.value = 'submit';

      login.appendChild(h2);
      label1.appendChild(input);
      form.appendChild(label1);
      label2.appendChild(pass);
      form.appendChild(label2);
      form.appendChild(submit);
      login.appendChild(form);
}
var login1 = new Login('matt');
var login2 = new Login('ryan');

login1.build();
//login2.build();
