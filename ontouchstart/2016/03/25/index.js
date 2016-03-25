var hello = require('./hello/hello').hello;
document.title = hello('world');
document.body.innerHTML = hello('world'); 
