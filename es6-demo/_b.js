const sayName = function(name){
	name = name || 'Lucy'
	console.log('this is sayName , my name is' + name)
}
const data = [
	{
		_active : true,
		_name : 'Lily',
		_age : 18,
		_sex : 'woman'
	},
	{
		_active : false,
		_name : 'Lucy',
		_age : 20,
		_sex : 'woman'
	},
	{
		_active : false,
		_name : 'Jack',
		_age : 22,
		_sex : 'man'
	}
]
const sayAge = function(age){
	let _merry = 'ok'
	age = age || 18
	console.log(`How are you, my age is ${age} ${_merry}`)
}

export { sayHi , Person , getTpl } from "./_c"; //导入方法暴露并暴露
export {
    sayName,
    sayAge,
    data
}
