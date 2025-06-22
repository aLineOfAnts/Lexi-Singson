var canvas 
var ctx
var color = "#000000"
var lineWidth = 10;
const tools = ["PEN", "ERASER", "PAINTBUCKET"]
var tool = tools[0];
window.onload = function() {
    canvas = document.querySelector(".Post-Office-Canvas");
    trash = document.getElementById("trash")

    ctx = canvas.getContext("2d");
    var drawing = false
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, innerWidth, innerHeight);

    console.log(ctx.globalCompositeOperation);
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    canvas.addEventListener('mousedown', (e) => {
        ctx.lineWidth = lineWidth;
        if (tool === tools[0]) {
            ctx.globalCompositeOperation = "source-over";
            ctx.strokeStyle = color;
            drawing = true

            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
            ctx.stroke()
        } else if (tool === tools[1]) {
            console.log("this should work");
            drawing = true
            ctx.globalCompositeOperation = "destination-out";
            ctx.strokeStyle = "rgba(0,0,0,1)";

            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY);
            ctx.stroke()
        } else if (tool == tools[2]) {
            const origin = ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data
            ctx.fillStyle = "red";
            ctx.fillRect(e.offsetX, e.offsetY, 1, 1);
            fill2(e.offsetX, e.offsetY, origin);
            
        }
    });

    function draw(e) {
        if (drawing) {
            ctx.lineCap = "round";
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke()
        }
    }

    function spread(x, y, origin) {
        var neighbors = [[x+1, y],[x, y+1],[x-1, y],[x, y-1]]
        for (var i = 0; i < neighbors.length; i++) {
            const pixel = ctx.getImageData(neighbors[i][0], neighbors[i][0], 1, 1).data;
            for (var o = 0; o < origin.length; o++) {
                if (pixel[o] !== origin[o]) {
                    return;
                }
                ctx.fillRect(neighbors[i][0], neighbors[i][1], 1, 1);
                
                spread(neighbors[i][0], neighbors[i][1], origin);
                return;
            }
        }
    }

    function fill(x, y, origin) {
        
        const pixel = ctx.getImageData(x, y, 1, 1).data;

        if (x < 0 || x > canvas.innerHeight || y < 0 || y > canvas.innerHeight) {
            return;
        }
        console.log(JSON.stringify(origin), JSON.stringify(origin))
        if (JSON.stringify(origin) !== JSON.stringify(pixel)) {
            console.log("they're the same officer")
        }

        ctx.fillRect(x, y, 1, 1);

        
        fill(x, y+1, origin);
        fill(x-1, y, origin);
        fill(x, y-1, origin);
        fill(x+1, y, origin);
        fill(x+1, y+1, origin);
        fill(x-1, y-1, origin);
    }

    function fill2(x, y, origin, color) {
        var pixels = [[x+1, y], [x, y+1], [x-1, y], [x, y-1]]

        while (pixels.length > 0) {
            var coord = pixels.at(-1);
            const pixel = ctx.getImageData(coord[0], coord[1], 1, 1).data;
            console.log("pixel", pixel);
            console.log("pixel", origin);
            pixels.pop();
        
            if (coord[0] > 0 && coord[0] < canvas.width && coord[1] > 0 && coord[1] < canvas.height ) {
                if (JSON.stringify(pixel) === JSON.stringify(origin)) {
                    ctx.fillRect(pixel[0], pixel[1], 1, 1);

                    /*pixels.push([pixel[0]+1, pixel[1]])
                    pixels.push([pixel[0], pixel[1]+1])
                    pixels.push([pixel[0]-1, pixel[1]])
                    pixels.push([pixel[0], pixel[1]-1])
                    console.log("WORK");*/
                    console.log(pixel);
                }
            }
        }
    }
    canvas.addEventListener('mousemove', (e) => {
        draw(e)
    });
    canvas.addEventListener('mouseup', leaveCanvas);
    canvas.addEventListener('mouseout', leaveCanvas);

    function leaveCanvas() {
        if (drawing) {
            drawing = false
            ctx.closePath();
        }
    }

    trash.addEventListener("click", () => {
        ctx.reset();
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, innerWidth, innerHeight);
        ctx.lineCap = "round";
    })
}

function changeTool(type) {
    tool = tools[type];
    console.log(tool);
}

function changeColor(value) {
    color = value
}

function changeWidth(value) {
    var label = document.getElementById("Drawing-Size-Label");
    lineWidth = value;
    label.innerHTML = value + " px;"
}