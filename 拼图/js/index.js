window.onload=function(){
    var can=document.getElementById('can');
    var imgs=[["1","2","3"],["4","5","6"],["7","8","0"]];
    function hua(){
        for(var i=0;i<3;i++){
            can.innerHTML+="<br/>"
            for(var j=0;j<3;j++){	
				switch (parseInt(imgs[i][j])){	
					case 0:
					can.innerHTML+="<img src='images/1.png'/>";
						break;
					case 1:
					can.innerHTML+="<img src='images/1.jpg'/>";
						break;
					case 2:
					can.innerHTML+="<img src='images/2.jpg'/>";
						break;
					case 3:
					can.innerHTML+="<img src='images/3.jpg'/>";
						break;
					case 4:
					can.innerHTML+="<img src='images/4.jpg'/>";
						break;
					case 5:
					can.innerHTML+="<img src='images/5.jpg'/>";
						break;
					case 6:
					can.innerHTML+="<img src='images/6.jpg'/>";
						break;
					case 7:
					can.innerHTML+="<img src='images/7.jpg'/>";
						break;
					case 8:
					can.innerHTML+="<img src='images/8.jpg'/>";
						break;
					default:
						break;
				}
            }
        }
  
       
    var img=document.getElementsByTagName('img');
    for(var i=0;i<img.length;i++){
        img[i].index=i;
        img[i].onclick=function cx(){
            var x=parseInt(this.index/3);
            var y=parseInt(this.index%3);
            if(imgs[x][y]!=0){
                if(x-1>-1&&imgs[x-1][y]==0){
                    var temp=imgs[x][y];
                    imgs[x][y]=imgs[x-1][y];
                    imgs[x-1][y]=temp;
                    can.innerHTML="";
                    hua();
                }else if(x+1<3&&imgs[x+1][y]==0){
                    var temp=imgs[x][y];
                    imgs[x][y]=imgs[x+1][y];
                    imgs[x+1][y]=temp;
                    can.innerHTML="";
                    hua();
                }else if(y-1>-1&&imgs[x][y-1]==0){
                    var temp=imgs[x][y-1];
                    imgs[x][y-1]=imgs[x][y];
                    imgs[x][y]=temp;
                    can.innerHTML="";
                    hua();
                }else if(y+1<3&&imgs[x][y+1]==0){
                    var temp=imgs[x][y+1];
                    imgs[x][y+1]=imgs[x][y];
                    imgs[x][y]=temp;
                    can.innerHTML="";
                    hua();
                }
            }
        };
       }
    }
    hua();
    var img=document.getElementsByTagName('img');
    for(var i=0;i<img.length;i++){
        img[i].index=i;
        img[i].onclick=function cx(){
            var x=parseInt(this.index/3);
            var y=parseInt(this.index%3);
            console.log(x+" "+y);
            if(imgs[x][y]!=0){
                if(x-1>-1&&imgs[x-1][y]==0){
                    var temp=imgs[x][y];
                    imgs[x][y]=imgs[x-1][y];
                    imgs[x-1][y]=temp;
                    can.innerHTML="";
                    hua();
                }else if(x+1<3&&imgs[x+1][y]==0){
                    var temp=imgs[x][y];
                    imgs[x][y]=imgs[x+1][y];
                    imgs[x+1][y]=temp;
                    can.innerHTML="";
                    hua();
                }else if(y-1>-1&&imgs[x][y-1]==0){
                    var temp=imgs[x][y-1];
                    imgs[x][y-1]=imgs[x][y];
                    imgs[x][y]=temp;
                    can.innerHTML="";
                    hua();
                }else if(y+1<3&&imgs[x][y+1]==0){
                    var temp=imgs[x][y+1];
                    imgs[x][y+1]=imgs[x][y];
                    imgs[x][y]=temp;
                    can.innerHTML="";
                    hua();
                }
            }
        }
    }
}