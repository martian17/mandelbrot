var display = document.getElementById("result");

var count = 0;
var loop = function(){
    if(count > 7){
        display.innerHTML += "It gets inaccurate by itr=7 because of accumulating floating point errors";
        return false;
    }
    
    var val = 1/4+1/(100**count);
    var v0 = val;
    var cnt = 0;
    while(true){
        cnt++;
        val = v0+val*val;
        if(val > 2){
            break;
        }
    }
    display.innerHTML += count+": π = "+(cnt/10**count)+"\n";
    count++;
    setTimeout(loop,1000);
};

loop();