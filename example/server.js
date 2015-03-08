var zetta = require('zetta');
var Banshee = require('../index');
var sampleapp = require('./apps/sampleapp');

zetta()
  .use(Banshee)
  .use(sampleapp)
  .listen(1337);
