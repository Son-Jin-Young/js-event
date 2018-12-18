// Bubbling, Capturing
// var divs = document.querySelectorAll('div');

// divs.forEach(function(div) {
// 	div.addEventListener('click', logEvent, {
// 		capture: true
// 	});
// });

// function logEvent(event) {
// 	console.log(event.currentTarget.className);
// }

// Custom event
addEventListener('customTestEvent', (event) => {
	console.log('custom test event call!!', event);
});

var divThree = document.querySelector('.three');

divThree.addEventListener('click', (event) => {
    var eventDispatcher = new EventDispatcher();
	eventDispatcher.dispatch({name: 'SJY', age: 28});
});