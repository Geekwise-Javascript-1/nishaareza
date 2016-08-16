
/* var str = "    Nisha"
console.log(str.length);
console.log(str);
console.log(str.trim());*/

/*  Math Object  random number generated between 0 & 10

 var randNum = Math.floor(Math.random() * 10)  + 1;// floor rounds nearest lower number
 console.log(randNum);*/

 /* Date object
 var locale = 'en-us';
 var toDay = new Date;
 var
 console.log(toDay.getDate());
 console.log(toDay.getMonth());
 console.log(today.toLocalString(locale,{month:'long'})+ ' ');
 console.log(toDay.getFullYear());
*/
/* function
var firstName = "Nisha";

function newFunction(){
    var lastName = "kaippilly";
    alert(firstName);
    alert(lastName);
 }

 newFunction();*/
/* set string outside of function
set date from inside the function
alert your name and birthday
 easy : set birthday to a value
 hard : set date with date object

 prompt the user for the first and last name
 update your birthday function to have 3 parameters: color, first, lastName
 modify the console.log to output user first, last & color
 update function call to include all three arguments
 add date parameter octber 2, 1997
 string.split()
 name = ['Matthew', 'david', 'ggg'];
 name[1];*/

var userColor = prompt('choose a color');
 var firstName =prompt('Enter your First name');
 var lastName = prompt('Enter your Last name');
 var userBday = prompt('birthday');
 var locale ='en-us';

 function setBday(uF,uL,uB,uC)
 {
//   console.log(uB);
   var bdayArr = uB.split(' ');
//   console.log(bdayArr);
//   console.log(bdayArr[1]);
  return
       uF
       +' '
       +uL
       +' '
       +bdayArr[0]+' '+bdayArr[1]+' '+bdayArr[2]
       +' '
       +'.Your color is '
       +uC
   ;
 }

 function setBirthday(color,fName,lName)
 {
//   var birthDay = 'October 2 2000';
       var bDay = new Date;

     bDay.setFullYear(1997);
     bDay.setDate(01);
     bDay.setMonth(9);
     var fullMon = bDay.toLocaleString(locale,{month:'long'});
     console.log(fName
                 +' '
                 +lName
                 +' '
                 +bDay.getDate()
                 +' '
                 +fullMon
                 + ' '
                 +bDay.getFullYear()
                 +'.And my color is  '
                 + color);

 }
console.log( setBday(firstName,lastName,userBday,userColor));
// setBirthday(userColor,firstName,lastName);// function & arguments
