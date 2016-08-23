function getUsername() {
   var user = prompt('what is your username?');
   var u   =  checkUsername(user);
  //   splitUsername(user);

}
function splitUsername(user){
   user = user.trim();
   var i = 0;
   var firstName;
   var lastName;
    while (user.charAt(i) != ' ' &&  i < user.length){
       i++;
    }
    firstName = user.substr(0,i);
    while (user.charAt(i) == ' ' &&  i < user.length) {
        i++;
    }

    console.log(firstName);
    firstName = formatUsername(firstName);
    if( i < user.length){
    console.log(lastName);
    lastName = user.substr(i,user.length);
    lastName = formatUsername(lastName);
  }
  else{
    lastName = ' ';
  }
    return firstName +' ' + lastName;
}
function checkUsername(user){
    var preParsed = user;
    user = parseInt(user);
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
     craftMsg(preParsed);
}

function craftMsg(u) {
  var msg = 'Welcome ';
      msg += splitUsername(u);
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
