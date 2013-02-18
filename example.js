var partition = require('./');

var from = new Date();
var to = new Date();
to.setHours(to.getHours() + 1);
var res = partition(to-from, 10);

console.log(res);