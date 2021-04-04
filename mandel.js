//var canvas = document.createElement("canvas");
//document.body.appendChild(canvas);
var canvas = document.getElementById("canvas");
var width = 500;
var height = 500;
canvas.width = width;
canvas.height = height;

var ctx = canvas.getContext("2d");
var imageData = ctx.getImageData(0,0,width,height);



var draw = function(coord,zoom,itr){
    var data = imageData.data;
    console.log(data);
    for(var y = 0; y < height; y++){
        for(var x = 0; x < width; x++){
            var idx = y*width+x;
            //put the value in here
            var r = x*zoom+coord[0];//real
            var i = y*zoom+coord[1];//imaginary
            var zr = 0;
            var zi = 0;
            var zr1,zi1;
            var j = 0;
            for(j = 0; j < itr; j++){
                zr1 = zr*zr-zi*zi+r;
                zi1 = 2*zr*zi+i;
                if(zr1*zr1+zi1*zi1>4){//absolute value greater than 2 does not belong
                    break;
                }
                zr = zr1;
                zi = zi1;
            }
            //j is the number of iterations
            if(j === itr){
                data[idx*4+0] = 0;
                data[idx*4+1] = 0;
                data[idx*4+2] = 0;
                data[idx*4+3] = 255;
            }else{
                data[idx*4+0] = red(j);
                data[idx*4+1] = gre(j);
                data[idx*4+2] = blu(j);
                data[idx*4+3] = alp(j);
            }
        }
    }
    ctx.putImageData(imageData,0,0);
};

var red = function(j){
    return Math.floor(Math.sin(j/100)*255);
};
var gre = function(j){
    return Math.floor(Math.sin(j/100+1)*255);
};
var blu = function(j){
    return Math.floor(Math.sin(j/100+2)*255);
};
var alp = function(j){
    return 255;
};


//work in progress function
var roughDraw = function(){

}
