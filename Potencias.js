function ejecuta(){
	x=document.Ciclos.x.value

	if (x.length==0) {
		alert("Error, se debe indicar el valor de X");
		document.Ciclos.x.style.background="red";
	}
	else{
		x=parseInt(x);
		if (!(x>=1 && x<=10)){
			    alert("Error,X debe de estar dentro de 1 y 10");
			    document.Ciclos.x.style.background="red";
		}
		    else{
		   	    y=document.Ciclos.y.value;
		   	    if (y.length==0){
		   	   	    alert("Error, se debe indicar el valor de Y");
		   	   	    document.Ciclos.y.style.background="red";
		   	   	}
		   	   	else{
		   	   		y=parseInt(y);
		   	   		if (!(y>=1 && y<=5)){
		   	   			alert("Error, debe de estar dentro de 1 y 5");
		   	   			document.Ciclos.y.style.background="red";
		   	   		}
		   	   		else{
		   	   		    res=Math.pow(x, y);
		   	   		    document.Ciclos.res.value=res;
                    }
		   	}
		}
    }
}

function campo_x(){
	document.Ciclos.x.style.background="blue";
}

function campo_y(){
	document.Ciclos.y.style.background="blue";
}