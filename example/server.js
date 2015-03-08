var zetta = require('zetta');
var Banshee = require('../index');
var app = require('./apps/starter');

zetta()
  .use(Banshee)
//  .use(app)
  .listen(1337);
