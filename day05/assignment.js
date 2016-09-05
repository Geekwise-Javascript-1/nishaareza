var btn = document.getElementById('btn');
var in1 = document.getElementById("input1").value;
var in2 = document.getElementById("input2").value;
var div = ' ';

function btnClick(){
  alert('user clicked on the button');
  in1 ="Hello Javascript!";
  console.log(input1);
  alert(document.getElementById("input2").value);
//  document.getElementById("div").value = input2;
  div.value = in2;
  document.write(in1);
}
btn.onclick = btnClick;


//creat js object for input1, input2,btn,di
//after inputting values forinput1 & input2 user clicks go
//input1 value replaced with text "Hello JavaScript"
//alert new value of input1//replace div text with value of input 2
