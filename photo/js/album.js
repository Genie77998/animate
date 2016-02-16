/**
*author : zyz
*date : 2015-12-10
*version : 1.0.0
*/
var win=$(window),
	_id,
	linum,
	oImage = $("#bigimg"),
	domImage = oImage[0];
/**
*state：动态添加数据(采用fis3 mock假数据模拟)
*@method : showdata()
*/
var _data = {
	"error": 0,
	"message": "ok",
	"rows": [
		{"id":"1","smallpath":"images/small01.jpg","bigpath":"images/big01.jpg"},
		{"id":"2","smallpath":"images/small02.jpg","bigpath":"images/big02.jpg"},
		{"id":"3","smallpath":"images/small03.jpg","bigpath":"images/big03.jpg"},
		{"id":"4","smallpath":"images/small04.jpg","bigpath":"images/big04.jpg"},
		{"id":"5","smallpath":"images/small05.jpg","bigpath":"images/big05.jpg"}
	]
}
showdata(_data)
function showdata(data){
	var arrdata=data.rows;
	var str='';
	for(var i=0;i<arrdata.length;i++)
	{
		str+='<li class="animated bounceIn" bigpath="'+arrdata[i].bigpath+'"><canvas  id="canvas_'+arrdata[i].id+'"></canvas></li>';
		cvs(arrdata[i].id,arrdata[i].smallpath);
	}
	$(".section").append(str);
}
/**
*@method cvs()
*使用canvas绘制图片
*/
function cvs(id,smallpath){
	var img = new Image();
	img.index=id;
	img.onload = function(){
		var cvs=document.getElementById("canvas_"+this.index);
		var context=cvs.getContext('2d');
		cvs.width =this.width;
		cvs.height =this.height;
		context.drawImage(this,0,0);
	};
	img.src = smallpath;
}
/**
 * 大图预览
 * @method loadImg()
 */
function loadImg(id,callback){
	oImage.removeAttr("src");
	$(".bigbox").css({
		"width": win.width(),
		"height": win.height()
	}).show();
	var imgsrc = $("li").eq(id).attr("bigpath"),
		ImageObj= new Image();
	ImageObj.onload=function(){
		var w = this.width,
			h = this.height,
			winWidth = win.width(),
			winHeight = win.height(),
	    	realw = parseInt((winWidth - winHeight*w/h)/2),
			realh = parseInt((winHeight - winWidth*h/w)/2);
			oImage.css('width','auto').css('height','auto');
			oImage.css('padding-left','0px').css('padding-top','0px');
			if(h/w>1.2){
				oImage.attr('src',imgsrc).css('height',winHeight).css('padding-left',realw+'px');
			}else{	
				oImage.attr('src',imgsrc).css('width',winWidth).css('padding-top',realh+'px');
			}
		callback&&callback();
	}
	ImageObj.src= imgsrc;
}
//点击缩略图显示加载大图
$('.section').delegate('li','tap',function(e){
		_id=$(this).index();
		loadImg(_id);
		$(".piccur").html(_id+1);
		linum=$("li").length;
		$(".pictotal").html(linum);
});
//点击大图隐藏
$('.bigbox').tap(function(){
	$('.bigbox').hide();
});
//左右滑动
$('.bigbox').tap(function(){
	$(this).hide();
}).swipeLeft(function(){
	_id++;
	if(_id>linum-1){
		_id=linum-1;
	}else{
		loadImg(_id,function(){
			domImage.addEventListener('webkitAnimationEnd',function(){
				oImage.removeClass('animated bounceInRight');
				domImage.removeEventListener('webkitAnimationEnd');
			},false);
			oImage.addClass('animated bounceInRight');
		});
		$(".piccur").html(_id+1);
		$(".pictotal").html(linum);
	}	
}).swipeRight(function(){
	_id--;
	if(_id<0){
		_id=0;
	}else{
		loadImg(_id,function(){
			domImage.addEventListener('webkitAnimationEnd',function(){
				oImage.removeClass('animated bounceInLeft');
				domImage.removeEventListener('webkitAnimationEnd');
			},false);
			oImage.addClass('animated bounceInLeft');
		});
		$(".piccur").html(_id+1);
		$(".pictotal").html(linum);
	}
});
