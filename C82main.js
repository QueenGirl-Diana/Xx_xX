var mouse_event = "Empty";

var last_position_of_X;

var last_position_of_Y;

lineWidth = 1;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "purple";



canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    //color = document.getElementById("color").value;

    console.log(color);

    mouse_event = "my_mouse_down"
}

canvas.addEventListener("mouseup", my_mouse_up);

function my_mouse_up(e) {
    color = document.getElementById("color").value;
    console.log(color);

    mouse_event = "my_mouse_up"
}


canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    color = document.getElementById("color").value;
    console.log(color);

    mouse_event = "my_mouse_leave"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    var curent_possision_of_mouse_X = e.clientX - canvas.offsetLeft;
    var curent_possision_of_mouse_Y = e.clientY - canvas.offsetTop;
    if (mouse_event == "my_mouse_down")

    {
        ctx.beginPath();
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth
        console.log("last possition of X and Y cordinets are =...");
        console.log("X = " + last_position_of_X);
        console.log("Y = " + last_position_of_Y);

        console.log("Current X = " + curent_possision_of_mouse_X);
        console.log("Current Y = " + curent_possision_of_mouse_Y);

        ctx.moveTo(last_position_of_X, last_position_of_Y);
        ctx.lineTo(curent_possision_of_mouse_X, curent_possision_of_mouse_Y);
        ctx.stroke();
    }
    last_position_of_X = curent_possision_of_mouse_X
    last_position_of_Y = curent_possision_of_mouse_Y
}