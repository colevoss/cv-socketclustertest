var socket = socketCluster.connect();

socket.on('error', function (err) {
  throw 'Socket error - ' + err;
});

socket.on('connect', function () {
  console.log('CONNECTED');
});


socket.on('ready', function(status) {
  console.log(status);
});


socket.emit('ping', 'you have been pinged', function(x) {
  console.log(x, 'return from ping');
});


//var faces = positiveFaces;
//var faceContainer = document.getElementById('face-container');

//socket.on('rand', function (data) {
  //var face = faces[data.rand];
  //console.log('RANDOM:', data.rand, face);
  //faceContainer.innerHTML = face;
//});

//var pongChannel = socket.subscribe('pong');

//pongChannel.on('subscribeFail', function (err) {
  //console.log('Failed to subscribe to PONG channel due to error: ' + err);
//});

//var c = 0;

//pongChannel.watch(function (num) {
  //faces = c++ % 2 ? positiveFaces : negativeFaces;
  //console.log('PONG:', num);
//});
