 window.onload=function(){
 	document.onclick=function(ev){
 	 	var oEvent=ev||event;                
                //兼容性处理
        var scrollTop=document.documentElement.scrollTop   ||  document.body.scrollTop;
        var scrollLeft=document.documentElement.scrollLeft  ||  document.body.scrollLeft;                
                 // var oEvent=ev||event;
            alert(oEvent.clientX + scrollTop+'，'+oEvent.clientY + scrollLeft);//   IE浏览器兼容

        };
 }
 	 