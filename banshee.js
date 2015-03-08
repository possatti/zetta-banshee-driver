var Device = require('zetta-device');
var util = require('util');

var Banshee = module.exports = function(options) {
  Device.call(this);
  this._default = options['default'];
};
util.inherits(Banshee, Device);

Banshee.prototype.init = function(config) {
  config
  .name('Banshee')
  .type('banshee')
  .state('waiting')
  .when('waiting', { allow: ['do']})
  .when('doing', { allow: [] })
  .map('do', this.do, [
    { name: 'message', type: 'text'}
  ]);
};

Banshee.prototype.do = function(message, cb) {
  this.state = 'doing';
  this.log(this._default + ': ' + message);
  this.state = 'waiting';
  cb();
};
