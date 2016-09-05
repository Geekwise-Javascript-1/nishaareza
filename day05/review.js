function getUser(){
  var user = prompt('what is your name?');
//  checkUser(user);
 splitWords(user);
}
function splitWords(string){
  string = string.split(' ');
  userArr = [];
//  console.log(string);
   for(var i = 0; i<string.length; i++){
     if(checkUser(string[i])){
    // console.log(string[i]);
      userArr.push(formatUser(checkUser(string[i])));
   } else {
          continue;
          }
   }
   outputUser(userArr);
}

function checkUser(user){
  var canParse = parseInt(user);
  if(isNaN(canParse)  && user !== null &&  user.trim()){
    return user.trim();
  }
}
function formatUser(string){
  return string.charAt(0).toUpperCase()+string.toLowerCase().substr(1,string.length);
}

function outputUser(user){
  var msg =' ';

  for(var i = 0; i<user.length; i++){
    msg+= user[i] + ' ';
  }

  msg+= 'to my new site!';
  alert(msg);
}
getUser();
