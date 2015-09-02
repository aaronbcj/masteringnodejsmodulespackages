console.log('b starting');
exports.done = false;
var a = require('./a');
console.log('in b1, a.done = %j', a.done);
exports.done = true;
console.log('b done');