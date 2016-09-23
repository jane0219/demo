var fzCookie={
/*------------保存cookie------------*/
 saveCookie:function(name,value,day){
	var date=new Date();
	date.setDate(date.getDate()+day);
	document.cookie=name+"="+encodeURIComponent(value)+";expires="+date;
},
/*--------得到保存的cookie中的单个值---------*/
 getCookie:function(name){
	var temp="";
    var cookieStr=document.cookie;
    var cookieAtr=cookieStr.split("; ");
    // alert(cookieStr);
    for(var i=0;i<cookieAtr.length;i++){
    	var attr=cookieAtr[i].split("=");
    	if (attr[0]==name) {
              temp=attr[1];
    	}
    }
    return decodeURIComponent(temp);
},
/*-------删除cookie(调用保存，更改时间)----------*/
 removeCookie:function(name){
	saveCookie(name,"",-10);
},
}