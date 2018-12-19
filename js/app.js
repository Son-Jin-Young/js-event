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

const eventDispatcher = new EventDispatcher();

const model = new Model();

const divThree = document.querySelector('.three');

divThree.addEventListener('click', (event) => {
    eventDispatcher.dispatch('customTestEvent', {name: 'SJY', age: 28});
});

const btnAdd = document.querySelector('.add');

btnAdd.addEventListener('click', () => {
    const input = document.querySelector('.name');
    
    eventDispatcher.dispatch('addListModel', {name: input.value});
    
    input.value = '';
});

const btnRemove = document.querySelector('.remove');

btnRemove.addEventListener('click', () => {
    const input = document.querySelector('.name');

    eventDispatcher.dispatch('removeListModel', {name: input.value});
    
    input.value = '';
});
