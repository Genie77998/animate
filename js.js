var data = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "slideInDown", "slideInLeft", "slideInRight", "slideOutLeft", "slideOutRight", "slideOutUp", "hinge", "rollIn", "rollOut"],
	html = template('test',data);
	document.body.innerHTML = html;
	var _dd = document.getElementsByTagName('dd'),
		_animate = document.getElementById('animate'),
		_animatEle = document.getElementById('animatEle');
		for (var i = 0; i < _dd.length; i++) {
			_dd[i].onclick = (function(i){
				return function(){
					for (var t = 0; t < _dd.length; t++) {
						_dd[t].setAttribute('class','');
					}
					this.className = 'active';
					var _this = this.getElementsByTagName('p')[0],
						_class = _this.getAttribute('data-class');
						_animate.style.display = 'block';
						_animatEle.className = _class;
				}
			})(i);
		}
		_animate.onclick = function(){
			this.setAttribute('style','');
		}
		_dd[0].click();
