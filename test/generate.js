var memBefore = process.memoryUsage().rss;

var namegen = require('../');

console.log(namegen());

console.log(Math.ceil((process.memoryUsage().rss - memBefore) / 1024));