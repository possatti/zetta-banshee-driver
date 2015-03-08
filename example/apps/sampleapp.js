module.exports = function testApp(server) {

  var bansheeQuery = server.where({type: 'banshee'});
  
  server.observe([bansheeQuery], function(Banshee) {
    Banshee.call('play', function() {});
    setInterval( function() {
      Banshee.call('next', function() {});
    }, 5000);
  });

}