canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 100, 0, 2*Math.PI);
ctx.stroke();
color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(370, 200,100, 0, 2*Math.PI);
ctx.stroke();
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(540, 200,100, 0, 2*Math.PI);
ctx.stroke();
color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250,330,100, 0, 2*Math.PI);
ctx.stroke();
color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(430,330,100, 0, 2*Math.PI);
ctx.stroke();






