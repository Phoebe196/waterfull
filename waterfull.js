		window.onload = function(){
			waterfull('main','pic');
            var dataInt={"data":[{"src":"images/21.jpg"},{"src":"images/22.jpg"},{"src":"images/23.jpg"},{"src":"images/24.jpg"},
            {"src":"images/25.jpg"},{"src":"images/26.jpg"},{"src":"images/27.jpg"},{"src":"images/28.jpg"},{"src":"images/29.jpg"},{"src":"images/30.jpg"},
            {"src":"images/31.jpg"},{"src":"images/32.jpg"},{"src":"images/33.jpg"},{"src":"images/34.jpg"},{"src":"images/35.jpg"},{"src":"images/36.jpg"},
            {"src":"images/37.jpg"},{"src":"images/38.jpg"},{"src":"images/39.jpg"},{"src":"images/40.jpg"},{"src":"images/41.jpg"},{"src":"images/42.jpg"},
            {"src":"images/43.jpg"},{"src":"images/44.jpg"},{"src":"images/45.jpg"},{"src":"images/46.jpg"},{"src":"images/47.jpg"},{"src":"images/48.jpg"},
            {"src":"images/49.jpg"},{"src":"images/50.jpg"}]};
            window.onscroll=function(){
               if (checkScrollSlide) {
                var oParent=document.getElementById('main');
                    //将数据块渲染到当页面的尾部
                    for(i=0;i<dataInt.data.length;i++){
                        var oPic=document.createElement('div');
                        oPic.className="pic";
                        oParent.appendChild(oPic);
                        var oImg=document.createElement('img');
                        oImg.setAttribute("src",dataInt.data[i].src);
                        oPic.appendChild(oImg);

                        
                    }
                    waterfull('main','pic');
                }
                 // checkScrollSlide();
             }
         }

         function waterfull(parent,className){
    //将main下所有class为pic的元素取出来
    var oParent=document.getElementById(parent);
    var oPics=getByClass(oParent,className);
    //计算整个页面显示的列数(页面宽/box宽)
    var oPicW=oPics[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth/*页面宽度*//oPicW);
     // 设置main的宽
     oParent.style.cssText='width:'+oPicW*cols+'px;margin:0 auto';
     var hArr=[];
     for (var i = 0; i < oPics.length; i++) {
     	if(i<cols){
     		hArr.push(oPics[i].offsetHeight);
     	}else{
     		var minH=Math.min.apply(null,hArr);
     		var index=hArr.indexOf(minH);
     		oPics[i].style.position='absolute';
     		oPics[i].style.top=minH+'px';
     		oPics[i].style.left=oPics[index].offsetLeft+'px';
     		hArr[index]+=oPics[i].offsetHeight;
     	}
     }
 }
 function getByClass(parent,className){
		var arr=[],//用来存储获取的所有class元素
		oElements = parent.getElementsByTagName('*');
		for(i=0;i<oElements.length;i++){
			if (oElements[i].className==className) {
				arr.push(oElements[i]);
			}
		}
		return arr;
	}
	
    //检测是否具备了滚条加载数据块的条件
    function checkScrollSlide(){
        var oParent = document.getElementById('main');
        var oBox=getByClass(oParent,'pic');
        var lastBoxH=oBox[oBox.length-1].offsetTop+Math.floor(oBox[oBox.length-1].offsetHeight/2);
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        var height = document.body.clientHeight||document.documentElement.clientHeight;
        return (lastBoxH<scrollTop+height)?true:false;
    }