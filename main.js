

function saveSlide()
{
	var title = document.getElementById('newTitle').value;
	var content = document.getElementById('newTitle').innerHTML;
	var presentation = document.getElementById('hiddenDiv').innerHTML;

    var xmlhttp;
    
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","/save",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("title="+title+"&content="+content+"&presentation="+presentation);
}