var myLink = document.getElementById('mylink');
myLink.onclick = function() {
    var e = document.getElementById("myList").value;
    console.log(e);
    var x = document.getElementById("input").value;
    if(e=='food')
    {
      document.getElementById("foodex").innerHTML += x ;
    }
    if(e=='travel')
    {
      document.getElementById("travelex").innerHTML += x ;
    }
    if(e=='clothes')
    {
      document.getElementById("clothesex").innerHTML += x ;
    }
    if(e=='bill')
    {
      document.getElementById("billex").innerHTML += x ;
    }
}
