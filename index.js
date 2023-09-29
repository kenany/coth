const tanh = require('tanh');

function coth(x) {
  return 1 / tanh(x);
}

module.exports = coth;
