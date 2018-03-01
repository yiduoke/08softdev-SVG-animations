// var c = document.getElementById('canvas');
// creating the svg space thingie
var NS="http://www.w3.org/2000/svg";
var svg = document.createElementNS(NS,"svg");
svg.setAttribute("height", 500);
svg.setAttribute("width", 500);
document.body.appendChild(svg);

var requestID;

var stop = document.getElementById('stop');
var circle = document.getElementById('circle');
var dvd = document.getElementById('dvd');

var option; //-1 is circle, 1 is DVD
var x_velocity = Math.floor(Math.random() * 5)-10;
var y_velocity = Math.floor(Math.random() * 5)-10;
var x_pos = 250;
var y_pos = 250;
var radius = 0;
var growing = 1;

var circle_actual = document.createElementNS(NS, "circle");
svg.appendChild(circle_actual);

var draw = function(){
    if (option == -1){
        // ctx.clearRect(0, 0, 500, 500);
        // ctx.beginPath();
        // removing everything from the svg
        // while (svg.firstChild) {
        //     svg.removeChild(svg.firstChild);
        // }
        // ctx.arc(250, 250, radius, 0, 2 * Math.PI);
        circle_actual.setAttribute("cx", 250);
        circle_actual.setAttribute("cy", 250);
        circle_actual.setAttribute("r", radius);
        circle_actual.setAttribute("fill", "black");
    
        if (radius == 250){
            growing = 0;
        }
        else if (radius == 0){
            growing = 1;
        }
        if (growing == 1){
            radius++;
        }
        else{
            radius--;
        }
    }
    else if (option == 1){
        // ctx.clearRect(0, 0, 500, 500);
        // ctx.beginPath();

        // while (svg.firstChild) {
        //     svg.removeChild(svg.firstChild);
        // }

        if (x_pos <= 20 || x_pos >= 480){
            x_velocity *= -1;
        }
        if (y_pos <= 20 || y_pos >= 480){
            y_velocity *= -1;
        }

        x_pos += x_velocity;
        y_pos += y_velocity;
        // ctx.arc(x_pos, y_pos, radius, 0, 2 * Math.PI);
        // ctx.stroke();
        // ctx.fill();  
        circle_actual.setAttribute("cx", x_pos);
        circle_actual.setAttribute("cy", y_pos);
        circle_actual.setAttribute("r", radius);
    }

    // requestID = window.requestAnimationFrame( draw );
    // console.log(requestID);
}

requestID = setInterval(draw, 17);

var circleAnimation = function(){
    // window.cancelAnimationFrame( requestID );
    clearInterval(requestID);
    requestID = setInterval(draw, 17);
    option = -1;
    radius = 0;
    growing = 1;
    draw();
}

var dvdAnimation = function(){
    // window.cancelAnimationFrame(requestID);
    clearInterval(requestID);
    requestID = setInterval(draw, 17);
    x_pos = 250;
    y_pos = 250;
    radius = 20;
    option = 1;
    draw();
}

var stopit = function(){
    // window.cancelAnimationFrame(requestID);
    clearInterval(requestID);
    x_velocity = Math.floor(Math.random() * 5)-10;
    y_velocity = Math.floor(Math.random() * 5)-10;
    x_pos = 250;
    y_pos = 250;
}

// window.requestAnimationFrame( draw );

circle.addEventListener("click", circleAnimation);
dvd.addEventListener("click", dvdAnimation);
stop.addEventListener("click", stopit);