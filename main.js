canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;
car_x=250;
car_y=250;
background_image="racing.gif";
car2_width=100;
car2_height=90;
car2_x=100;
car2_y=100;
car_image="images.car 1.jpg";
car2_image="images.car2.jpg"
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=car_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar;
    car2_imgTag.src=car2_image
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car_imgTag, car_x,car_y,car_width,car_height);
    ctx.drawImage(car2_imgTag, car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
}