let temp=false;
function display()
{   
  if(temp==false)
	{
		document.getElementById('option3').style.color="peru";
	document.getElementById('resortbox').style.visibility="visible";
	temp=true;
	}
	 else
	 {
		document.getElementById('option3').style.color="white";
	 document.getElementById('test').style.visibility="hidden";
	 temp=false;
	 }
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("img1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function display2()
{   
  if(temp==false)
	{
		document.getElementById('ff').style.color="peru";
	document.getElementById('foun').style.visibility="visible";

	temp=true;
	
	}
  	// else
	// {
	// document.getElementById('test').style.visibility="hidden";
	// temp=false;
	// }
}
function display4()
{   
  if(temp==true)
	{
		document.getElementById('ff').style.color="white";
	document.getElementById('foun').style.visibility="hidden";
	temp=false;
	}
  	// else
	// {
	// document.getElementById('test').style.visibility="hidden";
	// temp=false;
	// }
}
function display3()
{   
  if(temp==true)
	{
		document.getElementById('option3').style.color="white";
	document.getElementById('resortbox').style.visibility="hidden";
	temp=false;
	}
  	// else
	// {
	// document.getElementById('test').style.visibility="hidden";
	// temp=false;
	// }
}