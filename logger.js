const EventEmitter = require('events');

class Logger extends EventEmitter {
   log(message) {
        // Send an HTTP Request
        console.log(message);

        // Raise an Event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}
module.exports = Logger;