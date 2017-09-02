var myLink = document.getElementById('mylink');
myLink.onclick = function() {
    update();
    percentage();
    excess();
    eighty();
    document.getElementById("input").value = "";
}

function percentage() {
    var fp = (document.getElementById("foodex").innerHTML / document.getElementById("fl").innerHTML) * 100;
    var tp = (document.getElementById("travelex").innerHTML / document.getElementById("tl").innerHTML) * 100;
    var cp = (document.getElementById("clothesex").innerHTML / document.getElementById("cl").innerHTML) * 100;
    var bp = (document.getElementById("billex").innerHTML / document.getElementById("bl").innerHTML) * 100;
    document.getElementById("fper").innerHTML = fp.toFixed(2);
    document.getElementById("tper").innerHTML = tp.toFixed(2);
    document.getElementById("cper").innerHTML = cp.toFixed(2);
    document.getElementById("bper").innerHTML = bp.toFixed(2);
}

function update() {
    var e = document.getElementById("myList").value;
    var x = document.getElementById("input").value;
    if (e == 'food') {
        var s = Number(x) + Number(document.getElementById("foodex").innerHTML);
        document.getElementById("foodex").innerHTML = s;
    }
    if (e == 'travel') {
        var s = Number(x) + Number(document.getElementById("travelex").innerHTML);
        document.getElementById("travelex").innerHTML = s;
    }
    if (e == 'clothes') {
        var s = Number(x) + Number(document.getElementById("clothesex").innerHTML);
        document.getElementById("clothesex").innerHTML = s;
    }
    if (e == 'bill') {
        var s = Number(x) + Number(document.getElementById("billex").innerHTML);
        document.getElementById("billex").innerHTML = s;
    }
}

function excess() {
    if (Number(document.getElementById("foodex").innerHTML) > Number(document.getElementById("fl").innerHTML)) {
        highlight("food", "fl", "fper", "foodex");
    }
    if (Number(document.getElementById("travelex").innerHTML) > Number(document.getElementById("tl").innerHTML)) {
        highlight("travel", "tl", "tper", "travelex");
    }
    if (Number(document.getElementById("clothesex").innerHTML) > Number(document.getElementById("cl").innerHTML)) {
        highlight("clothes", "cl", "cper", "clothesex");
    }
    if (Number(document.getElementById("billex").innerHTML) > Number(document.getElementById("bl").innerHTML)) {
        highlight("bill", "bl", "bper", "billex");
    }
}

function highlight(category, categoryl, categoryper, categoryex) {
    document.getElementById(category).style.background = "red";
    document.getElementById(categoryl).style.color = "red";
    document.getElementById(categoryper).style.color = "red";
    document.getElementById(categoryex).style.color = "red";
}

function eighty() {
    var e = document.getElementById("myList").value;
    if (e == 'food') {
        if (Number(document.getElementById("foodex").innerHTML) > 0.80 * Number(document.getElementById("fl").innerHTML)) {
            alert("Your spending limit for food has crossed " + document.getElementById("fper").innerHTML + "%");
        }
    }
    if (e == 'travel') {
        if (Number(document.getElementById("travelex").innerHTML) > 0.80 * Number(document.getElementById("tl").innerHTML)) {
            alert("Your spending limit for travel has crossed " + document.getElementById("tper").innerHTML + "%");
        }
    }
    if (e == 'clothes') {
        if (Number(document.getElementById("clothesex").innerHTML) > 0.80 * Number(document.getElementById("cl").innerHTML)) {
            alert("Your spending limit for clothes has crossed " + document.getElementById("cper").innerHTML + "%");
        }
    }
    if (e == 'bill') {
        if (Number(document.getElementById("billex").innerHTML) > 0.80 * Number(document.getElementById("bl").innerHTML)) {
            alert("Your spending limit for bill has crossed " + document.getElementById("bper").innerHTML + "%");
        }
    }
}