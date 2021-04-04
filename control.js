var cancoord = [0,0];
var focused = false;

window.addEventListener("mousemove",
function(e){
    var x = e.clientX - canvas.offsetLeft + window.scrollX;
    var y = e.clientY - canvas.offsetTop + window.scrollY;
    if(x < 0 || y < 0 || x > canvas.width || y > canvas.height){
        focused = false;
        return false;
    }
    focused = true;
    cancoord[0] = x;
    cancoord[1] = y;
});


document.addEventListener("keydown",
function(e){
    if(focused){
        if(e.key === ","){//minus
            mandelminus();
        }else if(e.key === "."){//plus
            mandelplus();
        }
    }
});

var coord = [-2,-2];
var zoom = 4/500;
var itr = 1000;

draw(coord,zoom,itr)

var mandelminus = function(){//zoom out
    var r = coord[0]-cancoord[0]*zoom;
    var i = coord[1]-cancoord[1]*zoom;
    zoom = zoom*2;
    coord[0] = r;
    coord[1] = i;
    draw(coord,zoom,itr);
};

var mandelplus = function(){//zoom in
    var r = coord[0]+cancoord[0]*zoom/2;
    var i = coord[1]+cancoord[1]*zoom/2;
    zoom = zoom/2;
    coord[0] = r;
    coord[1] = i;
    draw(coord,zoom,itr);
};


/*
var mandelminus = function(){//zoom out
    var r = coord[0]+cancoord[0]*zoom-500*zoom;
    var i = coord[1]+cancoord[1]*zoom-500*zoom;
    zoom = zoom*2;
    coord[0] = r;
    coord[1] = i;
    draw(coord,zoom,itr);
};

var mandelplus = function(){//zoom in
    var r = coord[0]+cancoord[0]*zoom-125*zoom;
    var i = coord[1]+cancoord[1]*zoom-125*zoom;
    zoom = zoom/2;
    coord[0] = r;
    coord[1] = i;
    draw(coord,zoom,itr);
};
*/
