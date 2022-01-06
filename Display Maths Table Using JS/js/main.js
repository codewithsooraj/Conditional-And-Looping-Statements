function create(){
    document.getElementById("p").innerHTML="";
    document.getElementById("boxid").style.height="auto";
    var n = document.getElementById("table").value;
    var s = document.getElementById("start").value;
    var e = document.getElementById("end").value;
    // console.log(n);
    // console.log(s);
    // console.log(e);
        for(var i = s; i <= e; i++) {
            var r = i * n;
            document.getElementById("p").innerHTML += n + " * "+ i + " = " + r + "<br>";
        
        }
    }

