export const sayHi = function(){ //暴露 sayHi方法
	console.log("Hi")
}


export class Person {  //暴露 Person对象
	constructor(name = 'Lily',age = 18){  //默认值
		this.name = name
		this.age = age
		this.sayHello()  //对象实例化的时候执行
	}

	sayHello(){
		console.log(`How are you, my name is ${this.name}, I am ${this.age} years old`)
	}
}

export const getTpl = function(data){ //模板
	let len = data.length
	let _html = ''
	if(len == 0){return ''}
	_html += '<ul>'
	for(let i = 0 ; i < len ; i++){
		_html += tpl(data[i])
	}
	_html += '</ul>'
	console.log(_html)
	
	function tpl(_data){
		return `
		<li ${_data._active ? 'class="active"' : ''}>
			<p>my name is ${_data._name}, I am ${_data._age} years old , I am a ${_data._sex == 'woman' ? 'gril' : 'boy'}</p>
		</li> \n`
	}
}
