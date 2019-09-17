	
	function insertText(){
		document.getElementById("newContent").innerHTML = "Some new text: <br> HELLO <br>";
		
	}
		
	function calculate(){
		var t = widthBox.value;
		//read from the textbox
		var w = document.getElementById("widthBox").value;
		var l = document.getElementById("lengthBox").value;
		var h = document.getElementById("heigthBox").value;
		//convert to Float
		w=parseFloat(w);
		h=parseFloat(h);
		l=parseFloat(l);	
		var result = w*l*h;
		//show result in div
		document.getElementById("result").innerHTML = result;
	}
	
	
	function multiplication(){
		//read from textBox
		document.getElementById("mult-tb").innerHTML ="";
		
		var f = document.getElementById("factor").value;
		
		for(var i=1;i<=10;i++){
			var res=f*i;
			//show result in div
			document.getElementById("mult-tb").innerHTML += res+"<br/>";
			
		}
	}
		
	