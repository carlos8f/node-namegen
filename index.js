var names = require('./names.json');

module.exports = function() {
  return {
  	first: names.first[Math.round(Math.random() * (names.first.length - 1))],
    last: names.last[Math.round(Math.random() * (names.last.length - 1))]
  };
};