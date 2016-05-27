$(document).ready(cool);

function cool() {
	$(".fadeitem").click(fadeitem)
	$(".pushy").click(pushy)
}

function pushy(){
  alert("you click it")	
}

function fadeitem() {
	//$("p").hide();
	//$("p").hide("fast");
	//$("p").hide(3000);
	//$("p").fadeOut(2000);

	// Speed & Transparency
	$("img").fadeTo(2000, 0.9);

	// Slide down
	//$("p").slideUp(2000);

	//Callback
	$("img").hide(2500);
	//alert("where am i")
}

//function callbackFunction() {
//	alert("ANIMATE")
//}
