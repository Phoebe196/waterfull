$(window).on('load',function(){
	waterfull();
	
	$(window).on('scroll',function(){
		if(checkscrollside){//判断是否具备加载图片的条件
		$.getJSON('image.json',function(json){
          $.each(json.data,function(key,value){
              var oPic=$('<div>').addClass('pic').appendTo($('#main'));
              $('<img>').attr('src',$(value).attr('src')).appendTo($(oPic));
               
          
      })
          waterfull();
})
		}
	})
})

function waterfull(){
	var $pics=$('#main>div');
	var w=$pics.eq(0).outerWidth();//包括padding填充的宽度
	var cols=Math.floor($(window).width()/w);//一行几张图
	$('#main').width(w*cols).css('margin','0 auto');
	var hArr=[];//存放一行每张图的高度
	$pics.each(function(index,value){
		var h=$pics.eq(index).outerHeight();
        if(index<cols){
          hArr[index]=h;//存放前六张图的高
        }else{
        	var minH=Math.min.apply(null,hArr);//求前六张的高度最小的值
        	var minHIndex=$.inArray(minH,hArr);//高度最小的索引值
        	$(value).css({
        		'position':'absolute',
        		'top':minH+'px',
        		'left':minHIndex*w+'px'
        	})//把第七张图定位到高度最小的图下方
        	hArr[minHIndex]+=$pics.eq(index).outerHeight();//更新定位完的这一列的值
        }
	})
}

function checkscrollside(){
	var $lastBox=$('#main>div').last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
	var scrollTop=$(window).scrollTop();
	var documentH=$(window).height();
	return (lastBoxDis<scrollTop+documentH)?true:false;
}