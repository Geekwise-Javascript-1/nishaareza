var name =prompt('what is your name?');
//var rName;

function capitalize(pName)
{
  var fLetter = name.charAt(0);
  var cLetter = fLetter.toUpperCase();
  var sLength = pName.length;

  pName = cLetter + pName.substr(1,sLength);
  return pName;
}

name = capitalize(name);
console.log(name);
