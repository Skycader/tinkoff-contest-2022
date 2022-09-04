setTimeout(function timeout() {
	console.log('1');
},0)

Promise.resolve('2').then(console.log)
console.log('3')
