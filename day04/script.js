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
   var u   =  checkUsername(user);


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
//getUsername();

function checkUsername(user){
  var preParsed = user;
    user = parseInt(user);
//add check for pre parsed blank
//add check for pre parsed null

//preParsed = preParsed.trim();

//  console.log(typeof user);
 console.log(isNaN(user));
 if(  !isNaN(user) || preParsed == null || preParsed == '' ){
     alert('that is not aproper user name');
     return;
 }
 preParsed = preParsed.trim();
 if (preParsed === ''){
     alert('that is not aproper user name');
     return;
 }
// alert('Thank you'+  user);
     craftMsg(preParsed);
      }


getUsername();

// incorporate checkUsername function into getUsername script
//call check Username passing in users input
//modify current checkUsername function remving prompt
//return username if input is not  a number
