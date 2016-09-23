var bigBox,Oabox,Obbox,Ocbox,btn1,btn2,txt;
var spanList;
var atrSpan=[];
var aa=0;
var bb=0;
var cc=0;
var isTrue=true;
var count=0;
window.onload=function(){
	bigBox=document.getElementById("box");
	Oabox=document.getElementById("Oa");
	Obbox=document.getElementById("Ob");
	Ocbox=document.getElementById("Oc");
	btn1=document.getElementById("btn1");
	btn2=document.getElementById("btn2");
	txt=document.getElementById("txt");
	btn1.addEventListener("click",start,false);
	btn2.addEventListener("click",end,false);
}
function start(){
	if(count==0){
		var txtValue=parseInt(txt.value);
		var height=30;
		var width=200;
		for(var i=0;i<txtValue;i++){
			var color="rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
			var Ospan=document.createElement("span");
			Ospan.style.display="block";;
			Ospan.style.height=height+"px";
			Ospan.style.width=width+"px";
			Ospan.style.background=color;
			Ospan.style.position="absolute";
			var delX=(300-width)/2;
			var delY=500-height*i;
			Ospan.style.left=delX+"px";
			Ospan.style.top=delY+"px";
			Ospan.style.borderRadius="20px";
	        width-=30;
	        Oabox.appendChild(Ospan);
	        aa+=30;
		}
	    spanList=document.getElementsByTagName('span');
	    for(var i=spanList.length-1;i>=0;i--){
	    	atrSpan.push(spanList[i]);
	    }
   }
     
	move(txtValue,150,450,750);
}

var attr=[];
var m=0;
var top=0;
var times=300;
var h=1;
function move(n,a,b,c){
	    count++;
	   
		if(n==1){
			clearTimeout(attr[m]);
			attr[m]=setTimeout(function(){
				var str=atrSpan[n-1].style.left.split("p");
				var _left=str[0];
				if(_left>0&&_left<300){
					aa-=30;
				}else if(_left<600&&_left>300){
					bb-=30;
				}else {
					cc-=30;
				}
				atrSpan[n-1].style.top="120px";
			},times);
			m=m+1;times+=300;
			clearTimeout(attr[m]);
			attr[m]=setTimeout(function(){
				c=c-atrSpan[n-1].offsetWidth/2;
				atrSpan[n-1].style.left=c+"px";
			},times);
			m=m+1;times+=300;
			clearTimeout(attr[m]);
			attr[m]=setTimeout(function(){
				if(c>0&&c<300){
					var _top=500-aa;
					aa+=30;
				}else if(c>300&&c<600){
					var _top=500-bb;
					bb+=30;
				}else if(c>600&&c<900){
					var _top=500-cc;
					cc+=30;
				}
				atrSpan[n-1].style.top=_top+"px";
			},times);
			m=m+1;times+=300;
			clearTimeout(attr[m]);
		}else{
			move(n-1,a,c,b);
			clearTimeout(attr[m]);
			attr[m]=setTimeout(function(){
				
				var str=atrSpan[n-1].style.left.split("p");
				var _left=str[0];
				if(_left>0&&_left<300){
					aa-=30;
				}else if(_left<600&&_left>300){
					bb-=30;
				}else {
					cc-=30;
				}
				atrSpan[n-1].style.top="120px";
			},times);
			m=m+1;times+=300;
			clearTimeout(attr[m]);
			attr[m]=setTimeout(function(){
				c=c-atrSpan[n-1].offsetWidth/2;
			    atrSpan[n-1].style.left=c+"px";
			},times);
			m=m+1;times+=300;
			clearTimeout(attr[m]);
			attr[m]=setTimeout(function(){
				if(c>0&&c<300){
					var _top=500-aa;
					aa+=30;
				}else if(c>300&&c<600){
					var _top=500-bb;
					bb+=30;
				}else if(c>600&&c<900){
					var _top=500-cc;
					cc+=30;
				}
				atrSpan[n-1].style.top=_top+"px";	
			},times);
			m=m+1;times+=300;
			clearTimeout(attr[m]);
			move(n-1,b,a,c);
		}
		
	 }
function end(){
	for(var k=0;k<attr.length;k++){
		clearTimeout(attr[k]);
	}
}