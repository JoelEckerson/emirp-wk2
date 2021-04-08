console.log('Hello from JS');

function* countdown(){
	let a = 10;
	while( a > 0 ){
		yield 'launching in ' + a;
		a--;
	}
	yield 'blast off!';
}
const countdowner = countdown();

function* switcher(){
	while( true ){
		yield 'on';
		yield 'off';
	}
}
const switcheroo = switcher();

function* pageLoad(){
	let counter = 0;
	while( true ){   
		if( counter > 0 ){
			yield `you have refreshed ${ counter } times`;
		}
		else{
			yield `Hello world!`;
		}
		counter ++;
	}
}
const loader = pageLoad();