var product=[];
var proAllNum=0;
window.onload=function(){
	var box1=document.getElementById("box1");
	var box2=document.getElementById("box2");
    if(fzCookie.getCookie("shopCar")!=""){
    	product=JSON.parse(fzCookie.getCookie("shopCar"));
    }else{
    	product=[];
    }
    initPage();
    evenObject.addListener(box1,"click",handler1);
    evenObject.addListener(box2,"click",handler2);
    //product=JSON.stringify(product);
    console.log(product)
    //.saveCookie("shopCar",product,7);
}
function initPage(){   
//	box2.innerHTML="";
	for(var i=0;i<product.length;i++){
		var div=document.createElement("div");
		div.className=product[i].proId;
		var html="<img src='img/"+(i+5)+".jpg'/>"+"<span>"+product[i].proName+"</span>"+"<span>"+product[i].proPrice+"</span>"
		         +"<input class='sub' value='-' type='button'/>"+"<strong>"+product[i].proNum+"</strong>"+"<input class='add' value='+' type='button'/>"+"<a href='#' class='pro_del'>删除</a>";
	    div.innerHTML+=html;
	    box2.appendChild(div);
	    proAllNum=parseInt(product[i].proNum);
	}
	  var allShop=document.getElementById("allNum");
	  allShop.innerHTML=proAllNum;
}

function handler1(event){
	  event=evenObject.getEven(event);
	  var target=evenObject.getTarget(event);
	  if(product.length>0){
	  	 product=JSON.parse(fzCookie.getCookie("shopCar"));
	  }else{
	  	product=[];
	  }
	  var targetParent=target.parentNode;
	  var emPrice=targetParent.children[1];
      var priAtr=emPrice.innerText.split("￥");
	  var priStr=parseInt(priAtr[1]);
	  switch(targetParent.id){
	  	case 'li1': changePage(targetParent,priStr);
	  	break;
	  	case 'li2': changePage(targetParent,priStr);
	  	break;
	  	case 'li3': changePage(targetParent,priStr);
	  	break;
	  	case 'li4': changePage(targetParent,priStr);
	  	break;
	  }
	  product=JSON.stringify(product);
	  fzCookie.saveCookie("shopCar",product,7);
}
function changePage(pro,priStr){
  if(product.length>0){
	for(var j=0;j<product.length;j++){
		if(product[j].proId==pro.id){
			changeMess(j,priStr);
			return;
		}
	}
	addNewNode(pro);
  }else{
  	addNewNode(pro);
  }
}

function addNewNode(targetParent,priStr){//原数组不存在所点击的节点，去添加节点
	var length=product.length;
	var emPrice=targetParent.children[1];
	var priAtr=emPrice.innerText.split("￥");
    priStr=priAtr[1];
	product[length]={
		"proId":targetParent.id,
		"proNum":1,
		"proPrice":priStr,
		"proName": targetParent.children[2].innerText,
	};
	var div=document.createElement("div");
	div.className=targetParent.id;
	var html="<img src='img/"+(length+5)+".jpg'/>"+"<span>"+product[length].proName+"</span>"+"<span>"+product[length].proPrice+"</span>"
	         +"<input class='sub' value='-' type='button'/>"+"<strong>"+product[length].proNum+"</strong>"+"<input class='add' value='+' type='button'/>"+"<a href='#' class='pro_del'>删除</a>";
    div.innerHTML+=html;
    box2.appendChild(div);
    proAllNum=parseInt(product[product.length-1].proNum);
    var allShop=document.getElementById("allNum");
    allShop.innerHTML=proAllNum;
}
function changeMess(j,priStr){
	var box = document.getElementById('box2');
	product[j].proPrice = parseInt(product[j].proPrice)+priStr;
	box.children[j].children[2].innerHTML= product[j].proPrice;
	box.children[j].children[4].innerHTML= ++product[j].proNum;
	proAllNum++;
    var allShop=document.getElementById("allNum");
    allShop.innerHTML=proAllNum;
}
function handler2(event){
	event=evenObject.getEven(event);
	var target=evenObject.getTarget(event);
	var box2Parent=target.parentNode;
//	var add=box2Parent.getElementsByClassName("add");
	 if(product.length>0){
    	product=JSON.parse(fzCookie.getCookie("shopCar"));
    }else{
    	product=[];
    }
    switch(target.className){
    	case "add": addPro(target,box2Parent);
    	break;
    	case "sub": addPro(target,box2Parent);
    	break;
    	case "pro_del": delPro(box2Parent);
    	break;
    }
    product=JSON.stringify(product);
    fzCookie.saveCookie("shopCar",product,7);
	
}
function addPro(target,box2Parent){
	var list=document.getElementById("list");
	if(product.length>0){
	for(var j=0;j<product.length;j++){
		if(product[j].proId==box2Parent.className){
			var pri=list.children[j].children[1].innerText;
			var priAtr=pri.split("￥");
            var priStr=priAtr[1];
            if(target.className=="add"){
				product[j].proPrice=parseInt(product[j].proPrice)+parseInt(priStr);
				box2Parent.children[2].innerHTML=product[j].proPrice;
				box2Parent.children[4].innerHTML=++product[j].proNum;
				proAllNum++;
			}else if(target.className=="sub"){
				if(parseInt(product[j].proPrice)>=parseInt(priStr)){
				    product[j].proPrice=parseInt(product[j].proPrice)-parseInt(priStr);
					box2Parent.children[2].innerHTML=product[j].proPrice;
					box2Parent.children[4].innerHTML=--product[j].proNum;
					proAllNum--;
				}else{
					delPro(box2Parent);
				}
			}
			var allShop=document.getElementById("allNum");
            allShop.innerHTML=proAllNum;
            break;
		 }	
	}

  }
}
function delPro(box2Parent){
	if(product.length>0){
		for(var m=0;m<product.length;m++){
            if(product[m].proId==box2Parent.className){
            	var bigParent=box2Parent.parentNode;
		        bigParent.removeChild(box2Parent);
            	product.splice(m,1);
            	break;
            }
			
		}
	}
}
