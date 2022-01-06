function show()
{
    document.getElementById("box").innerHTML="";
    var n = document.getElementById("in").value;
    if(n%2==0){
        for(var i=1;i<=n;i++)
        {
            var div = document.createElement("div");
            div.style.width="200px";
            div.style.height="200px";
            div.style.backgroundColor="red";
            div.style.marginTop="2%";
            div.style.marginLeft="43.1%";
            document.getElementById("box").appendChild(div);
        }         
    }
    else{
        for(var i=1;i<=n;i++)
        {
            var div = document.createElement("div");
            div.style.width="200px";
            div.style.height="200px";
            div.style.backgroundColor="yellow";
            div.style.marginTop="2%";
            div.style.marginLeft="43.1%";
            document.getElementById("box").appendChild(div);
        }         
    }
}