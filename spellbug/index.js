$(document).ready(function(){
  var commonwords = [];
  $.getJSON('dictionary.json', function(data) {
  commonwords = data.commonWords;
  console.log(commonwords);
  });
  add = function(){
    var x = document.getElementById("mytext").value;
    commonwords.push(x);
    document.getElementById("demo").innerHTML = x+" is added.";
  }
  console.log(commonwords);
  clear = function(){
  document.getElementById("demo").innerHTML = "";
  check();  
  }
  check = function(){
   var a = document.getElementById("mytext1").value;
   var b = a.split(" ");
   console.log(b);
   for(i=0;i<b.length;i++){
     if(commonwords.indexOf(b[i])===-1)
     {
       document.getElementById("demo").innerHTML += '<span class="red_text">'+b[i]+" "+'</span>';
     }
     else {
       document.getElementById("demo").innerHTML += b[i]+" ";
     }
   }
 }


});
