function temperature(){
    // convert C to F temp
    // (CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * (9/5)) + 32
    document.getElementById("fahrenheit").value = f;
}

function weight(){
    //convert kgs to lbs
    //kgs * 2.2
    var k = document.getElementById("kilo").value;
    var p = k * 2.2
    document.getElementById("pounds").value = p
}

function distance(){
    //convert kms to miles
    // kms * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}
