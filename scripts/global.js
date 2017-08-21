addLoadEvent(articleToShow);
addLoadEvent(changeContent);

function articleToShow() {
	var art = document.getElementsByClassName("arttitle");
	for(var i=0; i<art.length; i++){
	  art[i].onclick = function() {
	    self.location="show.html"; 
	  }
	}
}



function getRuntimeStyle(obj, k) {
  var v = null;
  if (obj.currentStyle) 
    v = obj.currentStyle[k];
  else 
  	v = window.getComputedStyle(obj, null).getPropertyValue(k);
  return v;
}


function changeContent() {
  var classify = document.getElementsByClassName("change");
  var i;
  for(i=0; i<classify.length; i++){
  	classify[i].onclick = function() {
  	  var j;	
      for(var j=0; j<classify.length; j++){
        var shownow = classify[j].nextSibling.nextSibling;
      	nowdisplay = getRuntimeStyle(shownow, "display");
       	if(nowdisplay == "block")
      		break;
      }
  		if(classify[j] !== this){
  			var showpage = this.nextSibling.nextSibling;
  			var shownow = classify[j].nextSibling.nextSibling; 			
  			shownow.style.display = "none";
  			classify[j].style.backgroundColor = "#99ccff";
  			showpage.style.display = "block";
  			this.style.backgroundColor = "#6699cc";
  		}
  	}
  }
}








function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}