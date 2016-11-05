var a=["egg","tea","salt"];
var b=["sugar","egg","cookie"];
var c=["tea","salt","bread"];
var d=[];
function mix(a,b,c){
    for (var i=0;i<a.length;i++){
        if (d.indexOf(a[i])==-1){
            d.push(a[i]);
        }

    }
    for (var i=0;i<b.length;i++){
        if (d.indexOf(b[i])==-1){
            d.push(b[i]);
        
    }
    }
    for (var i=0;i<c.length;i++){
        if (d.indexOf(c[i])==-1){
            d.push(c[i]);
    }
    }
    document.write(d);
}
mix(a,b,c);