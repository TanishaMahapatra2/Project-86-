var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 var image_x=0;
 var image_y=0;
function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
block_image_object=Img;

block_image_object.scaleToWidth(710);
block_image_object.scaleToHeight(510);
block_image_object.set({
    left:image_x, top:image_y
       
   });
canvas.add(block_image_object);
});	
	
}

function playSound(){
	x.play();
}
console.log(playSound());
