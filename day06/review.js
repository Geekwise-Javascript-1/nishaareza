var btn = document.getElementById('btn');
var inp1 = document.getElementById("input1");
var inp2 = document.getElementById("input2");
var output = document.getElementById('output');

function btnClick(){
   inp1.value ="hello JavaScript!"
   alert(inp1.value);
   output.textContent = inp2.value;
   // output.innerHTML ='<strong>'+inp2.value+'</strong>';
}
btn.onclick = btnClick;
