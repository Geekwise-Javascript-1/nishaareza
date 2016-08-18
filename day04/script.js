/*function hello()
{
  var msg ="hello";
  world(msg);
}

function world(message)
{
  alert(message+"world");
}
hello(); */

function getUsername() {
  var user = prompt('what is your username?');
  craftMsg(user);
}


function craftMsg(u) {
  var msg = 'Welcome ';
      msg += formatUsername(u);
      msg += ' to my site';
  alertUser(msg);
}

function alertUser(m){
  alert(m);
}

function formatUsername(name){
   var n = name.charAt(0).toUpperCase();
       n+= name.substr(1,name.length).toLowerCase();
       return n;
}
getUsername();
