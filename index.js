var Scout = require('zetta-scout');
var util = require('util');
var Banshee = require('./banshee');

var BansheeScout = module.exports = function() {
  Scout.call(this);
};
util.inherits(BansheeScout, Scout);

BansheeScout.prototype.init = function(next) {

  var self = this;

  var query = this.server.where({type: 'banshee'});
  var options = {default: 'DEFAULT'};

  this.server.find(query, function(err, results) {
    if (results[0]) {
      self.provision(results[0], Banshee, options);
    } else {
      self.discover(Banshee, options);
    }
  });

  next();

};
