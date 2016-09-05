/*var fruitColors = [];
var cherry = ['cherry','red'];
var banana =['banana', 'yellow'];
var kiwi =['kiwi','green'];

var fruits = ['apple', 'banana','cherry', 'strawberry','pineapple'];
//console.log(fruits);
//console.log(fruits[1]);
//console.log(fruits.length);
//fruits.push('kiwi');
//console.log(fruits);
fruitColors.push(cherry);
fruitColors.push(banana);
fruitColors.push(kiwi);

var lastFruit = fruitColors.pop();// remove el from end of array
var firstFruit = fruitColors.shift();//remove el from front of array

//console.log( firstFruit);
//console.log( fruitColors);

//console.log(fruitColors[0][1]);
//console.log(fruitColors[1][1]);
//console.log(fruitColors[2][1]);

//var selectedFruit = fruits.slice(1,4); creates new array with selected indexies
//console.log(fruits);
//console.log(selectedFruit);

fruits.splice(1,2,'grape');
console.log(fruits);*/
var fruits =[];

function getFruit(){

    var  fruit = prompt('enter fruit');
    fruits.push(fruit);
    moreFruit();
}
function moreFruit(){
  var addMore = confirm('add more?');
  if (addMore){
    getFruit();
  } else {
    console.log(fruits);
    removeFruit();

  }
}
// add function asking for an index number
// remove that index from the fruits array
// console array
function removeFruit(){
  var remove = prompt('enter an index number');
    fruits.splice(remove,1);
    fruits.sort();
//    console.log(fruits);
    outputFruits(fruits);
}
function outputFruits()
{
  //for loop
//  for(var i=0, len =array.length; i<len; i++){
//    console.log(array[i]);
//  }
//while loop
// var i = 0;
 //while (i < array.length){
//   console.log(array[i]);
//   i++;
//}
// do while loop
var i =0;
do {
  console.log(array[i]);
  i++;
}while(false);

}
//getFruit();

/*var i = 0;

//loop through numbers 1 to 10 if no is 5 or 7 skip=> 'continue'
//console number
while (i<10){

  if(i === 5 || i ===7 ){
  i++;
  continue;
}
console.log(i);
i++;
} */
/*
for(var i = 1; i <= 10; i++){
  if(i===5 || i===7){
    continue;
    }
    console.log(i);
}
*/

var i = 0;
while(i<10){
  if (i === 6){
    break;
  }
  i++;
  console.log(i);
}
