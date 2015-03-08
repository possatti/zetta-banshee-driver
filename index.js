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

  this.server.find(query, function(err, results) {
    if (results[0]) {
      self.provision(results[0], Banshee);
    } else {
      self.discover(Banshee);
    }
  });

  next();

};
