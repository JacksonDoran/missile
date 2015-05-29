ThunderConnector = require('thunder-connector');

var keypress = require('keypress')
  , tty = require('tty');

// make `process.stdin` begin emitting "keypress" events

ThunderConnector.connect();

function up(degrees){
  stopTime = Math.floor(degrees * 22.3);
  setTimeout(function(){ThunderConnector.command('up');},0);
  setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

function down(degrees){
  stopTime = Math.floor(degrees * 22.3);
  setTimeout(function(){ThunderConnector.command('down');},0);
  setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

function turnRightDegrees(degrees){
  stopTime = Math.floor(degrees * 22.3)
  setTimeout(function(){ThunderConnector.command('right');},0);
  setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

function turnLeftDegrees(degrees){
  stopTime = Math.floor(degrees * 22.3)
  setTimeout(function(){ThunderConnector.command('left');},0);
  setTimeout(function(){ThunderConnector.command('stop');},stopTime);
}

function fire(){
  setTimeout(function(){ThunderConnector.command('fire');},0);
}

keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);

  if (key.name == 'up'){
    console.log("moved up");
    up(20);
  } else if (key.name == 'down'){
    console.log("moved down");
    down(20);
  } else if (key.name == 'right'){
    console.log("moved right");
    turnRightDegrees(20);
  } else if (key.name == 'left'){
    console.log("moved left");
    turnLeftDegrees(20);
  } else if (key.name == 'space'){
    console.log("fired");
    fire();
  } else if (key.name == 'f'){
    console.log("fired");
    fire();
  } else if (key.name == 's'){
    console.log("moved down");
    down(2);
  } else if (key.name == 'w'){
    console.log("moved up");
    up(2);
  }  else if (key.name == 'a'){
    console.log("moved left");
    turnLeftDegrees(2);
  }  else if (key.name == 'd'){
    console.log("moved right");
    turnRightDegrees(2);
  }  else if (key.name == 'x'){
    console.log("moved right");
    turnRightDegrees(180);
  } else if (key.name == 'z'){
    console.log("moved left");
    turnLeftDegrees(180);
  } 



  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

if (typeof process.stdin.setRawMode == 'function') {
  process.stdin.setRawMode(true);
} else {
  tty.setRawMode(true);
}
process.stdin.resume();
