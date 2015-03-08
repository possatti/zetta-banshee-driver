var Device = require('zetta-device');
var util = require('util');
var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  sys.puts(stdout);
}

var Banshee = module.exports = function(options) {
  Device.call(this);
};
util.inherits(Banshee, Device);

Banshee.prototype.init = function(config) {
  config
  .name('Banshee')
  .type('banshee')
  .state('paused')
  .when('paused', { allow: ['play'] })
  .when('playing', { allow: ['pause', 'previous', 'next'] })
  .map('pause', this.pause)
  .map('play', this.play)
  .map('next', this.next)
  .map('previous', this.previous);

  // Starts in the paused state
  exec("banshee --pause", puts);
};

Banshee.prototype.play = function(cb) {
  this.state = 'playing';
  exec("banshee --play", puts);
  this.log('Now playing');
  cb();
};

Banshee.prototype.pause = function(cb) {
  this.state = 'paused';
  exec("banshee --pause", puts);
  this.log('Now paused');
  cb();
};

Banshee.prototype.next = function(cb) {
  this.state = 'playing';
  exec("banshee --next", puts);
  this.log('Next track, please!');
  cb();
};

Banshee.prototype.previous = function(cb) {
  this.state = 'playing';
  this.log('Previous track, please!');
  exec("banshee --previous", puts);
  cb();
};
