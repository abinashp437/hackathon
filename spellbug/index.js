<script>


  var y = "advav";
  document.getElementById("demo").innerHTML = y;

  var y=document.getElementById('mytext1').value;
  var myobj1=JSON.parse(y);
  for (i=0;i<myobj1.length;i++){
   for (j=0;j<commonwords.length;i++){
     if (myobj1[i]!=commonwords[i]){
       document.getElementById('demo').innerhtml="myobj1";
       document.getElementById('mytext1').myobj1[i].style.text-decoration=underline;
   }
  }




  var x=document.getElementById('mytext').value;
  var myobj=JSON.parse(x);
  for(i=commonwords.length;i<commonwords.length+1;i++)
  {commonwords[i]=myobj[i];
  }

</script>
