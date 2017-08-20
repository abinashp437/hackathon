var myLink = document.getElementById('mylink');
myLink.onclick = function() {
    var e = document.getElementById("mylist");

    document.getElementById("foodex").innerHTML = e.options[e.selectedIndex].innerHTML;
    console.log(e.options[e.selectedIndex].value);
}