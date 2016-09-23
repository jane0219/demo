var evenObject={
	/*事件本身兼容*/
	getEven:function(event){
       return event||window.event;
	},
	/*鼠标键盘事件的兼容*/
    getButton:function(event){
    if(document.implementation.hasFeature("MouseEvents","2.0")){
      return event.button;
    }else{
      //针对IE8及以前版本
      console.log('button:'+event.button)
      switch(event.button){
        case 0:
        case 1:
        case 3:
        case 5:
        case 7: return 0;
        case 4: return 1;
        case 2:
        case 6: return 2;
      }
    }
  },
  /*得到目标事件的兼容*/
    getTarget:function(event){
    	return event.target||event.srcElement;
    },
  /*阻止事件冒泡的兼容*/
    stopPro:function(event){
    	if (event.stopPropagation) {
    		event.stopPropagation();
    	}else{
    		event.cancelBubble=true;
    	}
    },
  /*取消事件的默认行为的兼容*/
    returnFal:function(event){
    	if (event.preventDefault) {
    		event.preventDefault();
    	}else{
    		event.returnValue=false;
    	}
    },

   /*dom2级事件监听的兼容(这里的bool参数只能传false,,为了IE6。。)*/
   addListener:function(element,item,itFunc){
   		if (element.addEventListener) {
   			element.addEventListener(item,itFunc,false);
   		}else if(element.attachEvent){
   			element.attachEvent("on"+item,itFunc);
   		}else{
   			element["on"+item]=itFunc;
   		}
   },
   removeListener:function(element,item,itFunc){
   	   if (element.removeEventListener) {
   	   		element.removeEventListener(item,itFunc,false);
   	   }else if(element.attachEvent){
   	   		element.detachEvent("on"+item,itFunc);
   	   }else{
   	   		element["on"+item]=null;
   	   }
   },
   /*得到浏览器窗口大小的兼容*/
   

}