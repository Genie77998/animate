var _dd,_animate,_animatEle,i,data=["bounce","flash","pulse","rubberBand","shake","swing","tada","wobble","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flip","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","slideInDown","slideInLeft","slideInRight","slideOutLeft","slideOutRight","slideOutUp","hinge","rollIn","rollOut"],html=template("test",data);for(document.body.innerHTML=html,_dd=document.getElementsByTagName("dd"),_animate=document.getElementById("animate"),_animatEle=document.getElementById("animatEle"),i=0;i<_dd.length;i++)_dd[i].onclick=function(){return function(){var a,b,c;for(a=0;a<_dd.length;a++)_dd[a].setAttribute("class","");this.className="active",b=this.getElementsByTagName("p")[0],c=b.getAttribute("data-class"),_animate.style.display="block",_animatEle.className=c}}(i);_animate.onclick=function(){this.setAttribute("style","")},_dd[0].click();