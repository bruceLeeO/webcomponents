var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
ctx.save();
ctx.beginPath();

ctx.lineWidth = 5;
ctx.strokeStyle = "#f0f0f0";

//draw top and top right corner
ctx.moveTo(10+3.14,10);

ctx.arcTo(10+40,10,10+40,10+3.14,3.14);
//draw the downward arrow
ctx.lineTo(50,30);
ctx.lineTo(55,25);
ctx.lineTo(45,25);
ctx.lineTo(50,30);
// extend line and draw bottomright curb
ctx.arcTo(50,25+15,50-30-3.14,40,3.14);
// extend the line
ctx.lineTo(50-25-3.14,40);
// draw bottom left corner
ctx.arcTo(10,40,10,40-25-3.14,3.14);
// extend the line
ctx.lineTo(10,20);
// draw the arrow
ctx.lineTo(15,25);
ctx.lineTo(5,25);
ctx.lineTo(10,20);
// extend and draw the top left corner
ctx.arcTo(10,10,10+3.14,10,3.14);
ctx.stroke();
