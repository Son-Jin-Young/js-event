const eventDispatcher = new EventDispatcher();

const model = new Model();

const handleClick = (e) => {
    alert(e.currentTarget.tagName + '.' + e.currentTarget.className);
};

document.querySelector('#event-bubbling-example main').addEventListener('click', handleClick/* , {capture: true} */);
document.querySelector('#event-bubbling-example section').addEventListener('click', handleClick/* , {capture: true} */);
document.querySelector('#event-bubbling-example div').addEventListener('click', handleClick/* , {capture: true} */);
document.querySelector('#event-bubbling-example button.btn1').addEventListener('click', handleClick/* , {capture: true} */);

function checkId() {
    console.log('checkId');
}

function addId() {
    connsole.log('addId');
}

let callback = {
    list: []
};

callback.list.push(checkId);
callback.list.push(addId);

console.log(checkId === callback.list[0]);
console.log(checkId === callback.list[1]);

const customClick = (e) => {
    eventDispatcher.dispatch('customEvent', {distance: 1000, speed: 40});
};

const custom = (e) => {
    alert('customEvent ' + e.detail.distance + ', ' + e.detail.speed);
};

const add = (e) => {
    const input = document.querySelector('#custom-event-example .input');
    
    eventDispatcher.dispatch('add', {name: input.value});

    input.value = '';
};

const remove = (e) => {
    const input = document.querySelector('#custom-event-example .input');

    eventDispatcher.dispatch('remove', {name: input.value});

    input.value = '';
};

addEventListener('customEvent', custom);
document.querySelector('#event-bubbling-example button.btn2').addEventListener('click', customClick, {capture: true});
document.querySelector('#custom-event-example button.add').addEventListener('click', add);
document.querySelector('#custom-event-example button.remove').addEventListener('click', remove);