// capitalize Title case Class objects
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})

// Make a noise or produce an event has happened
// Raise an Event
emitter.emit('messageLogged', {id: 1, url: 'http://'});

// Raise: logging (data: message)
emitter.emit('messageLogged', {data: 'message'});

// function(arg){};
// (arg) => {};*/
