
var btn = document.querySelector('button');
//btn.addEventListener('click',function()){
//  console.log(e);
//  console.log(this);
//  console.log('clicked!');
//});
/*Add and remove event listener
btn.addEvent.Listener('click',once);

  function once(){
  console.log('done!');
  btn.removeEventListener('click',once)
}*/
/* detects mouse button clicks
btn.addEventListener('mousedown',function(e){
  console.log(e);
  if(event.which == 1){
    console.log('leftclick');
  } else if(event.which == 2){
    console.log('middleclick');
  } else if(event.which == 3){
    console.log('rightclick');
  }
});*/
/* preventing default behavior
a.addEventListener('click', function(e){
  console.log(e);
  e.preventDefault();
  console.log('google block!');
});*/
/*
addEventListener('keydown',function(e){
  console.log(e);
  if(e.keyCode == 86){
    document.body.style.backgroundColor = 'violet';
  }
});
addEventListener('keyup',function(e){
//  console.log(e);
  if(e.keyCode == 86){
    document.body.style.backgroundColor = '';
  }
});*/

/*addEventListener('keypress',function(e){
 console.log(e);
  if(e.charCode == 118){
    document.body.style.backgroundColor = 'violet';
  }
});*/

//console.log("v".charCodeAt(0));
/*losten mouse move
addEventListener('mousemove', function(e){
//  console.log(e.screenX+'px');
});
render dot based on click location
addEventListener('click',function(e){
  console.log(e);
  var dot = document.createElement('div');
  dot.className = 'dot';
 dot.style.left =(e.pageX  - 3)+ 'px';
 dot.style.top =( e.pageY - 3) +'px';
 document.body.appendChild(dot);
});*/

/*var hdr = document.querySelector('header');

addEventListener('scroll', function(e){
  console.log(e);
  if(e.pageY >= 65){
    hdr.classList.add('fixed');
    document.body.style.paddingTop = '65px';
  } else {
    hdr.classList.remove('fixed');
    document.body.style.paddingTop = '0px';
  }
})*/

addEventListener('copy',function(e){
  console.log(e);
});
