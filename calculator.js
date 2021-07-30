function display(val){
    if ((val=='sin(') || (val=='cos(') || (val=='tan(') || (val=='LN2') || (val=='PI') ) {
	    document.getElementById("result").value=val;
	}
	else if ((val=='LN2') || (val=='PI') || (val=='log(') || (val=='LOG2E') ) {
	    document.getElementById("result").value=val;
	}
	else if ((val=='E') || (val=='sqrt(') || (val=='pow(') || (val=='exp(') ) {
	    document.getElementById("result").value=val;
	}
	else {
        document.getElementById("result").value+=val ;
	}
}
  

function displayinverse(val){
    if (val=='sin('){
        if (document.getElementById("button1").value == 'sin-1'){
	         document.getElementById("result").value='asin(';
	    }
		else {
	       display(val);
	    }
	}	
	else if ( val=='cos('){
	    if(document.getElementById("button2").value == 'cos-1'){
	        document.getElementById("result").value='acos(';
	    }
		else{
	       display(val);
	    }
	}
    else if (val=='tan('){	
	    if (document.getElementById("button3").value == 'tan-1') {
	        document.getElementById("result").value='atan(';
	    }
		else {
	       display(val);
	    }
	}	
} 
         
function clr(){
    document.getElementById("result").value = "" ;
}

	
function del(){
	let x = document.getElementById("result").value ;
	let size = x.length;
	n = x.substring(0, size-1);
	clr();
	display(n);
}  
         
function solve(){  
   let x = document.getElementById("result").value ;
   let size = x.length;
   for (var i = 0; i < size; i++) {
	var ch = x.charAt(i);
	if ((ch=='1') || (ch=='2') ||(ch=='3') || (ch=='4')|| (ch=='5') ||(ch=='6') ||(ch=='7') || (ch=='8') ||(ch=='9') ||
     	(ch=='0')|| (ch=='.') ||(ch==',') ||(ch=='+') || (ch=='*') ||(ch=='-') || (ch=='/')|| (ch=='%') ||(ch=='(') ||
		(ch==')') || (ch=='E')|| (x.includes('pow(')) ||(x.includes('exp(')) || (x.includes('sqrt('))|| (x.includes('tan(')) ||
		(x.includes('log(')) ||(x.includes('cos(')) || (x=='PI') ||(x=='LOG10E') ||(x=='LN2') || (x.includes('sin('))||
		(ch=='!') ||(x=='LOG2E') ||(x.includes('sqrt(')) || (x.includes('asin(')) || (x.includes('acos(')) || (x.includes('atan(')) ){
			
    if (x.includes("!")){
     	n = Number(x.substring(0, size-1));
		f = 1;
				
		for(i = 2; i <= n; i++)
			f = f*i;
	   	clr();	
		display(f);
	} 

             
    else if(x.includes("%")) {
		n = Number(x.substring(0, size-1));
		f = n/100; 
		clr();	
		display(f);
	}
	
	else if (x.includes("sin(") || x.includes("cos(") ||x.includes("tan(")) {
		z="Math."+x;
		let y = eval(z) ;
        document.getElementById("result").value = y ;
	}
	
	else if (x.includes("LN2") || x.includes("PI") || x.includes("log(")){
	    z="Math."+x;
		let y = eval(z) ;
        document.getElementById("result").value = y ;
	}
	else if (x.includes("E") || x.includes("sqrt(") || x.includes("pow(") || x.includes("exp(") ){
	    z="Math."+x;
		let y = eval(z) ;
        document.getElementById("result").value = y ;
	}
	else if (x.includes("asin(") || x.includes("acos(") || x.includes("atan(") || x.includes("exp(") ){
	    z="Math."+x;
		let y = eval(z) ;
        document.getElementById("result").value = y ;
	}
		
	else{ 
	    const buttons = ['1', '2', '*', 'log'];
        let y = eval(x) ;
        document.getElementById("result").value = y ;
	     }
    }
	else {
	     document.getElementById("result").value = null;
		 alert("Invalid Entry !!!!!");
         break;
	
	}
}	

}		 
		 
		 
		
function inv(){
	var count=1;
			
	document.getElementById("inverse").onclick = function () {
    count++;
    if (count%2==0) {
		document.getElementById("button1").value = 'sin-1';
		document.getElementById("button2").value = 'cos-1';
		document.getElementById("button3").value = 'tan-1';	
	}
    else{
		document.getElementById("button1").value = 'sin';
		document.getElementById("button2").value = 'cos';
		document.getElementById("button3").value = 'tan';			 
	}			 
	
	}
}
		
		 
		 
		 
		 
		 
		 