
##Missile Launcher

**This project is a series of files that controls the thunder connector software through a raspberry Pi. This features multiple different pieces of code. The main one that I made controls the missile launcher through your keyboard.**

 else if (key.name == 'left'){
    console.log("moved left");
    turnLeftDegrees(20);
  } else if (key.name == 'space'){
    console.log("fired");
    fire();
  }

#samplecode2

  ThunderConnector = require('thunder-connector');
console.log(ThunderConnector);
ThunderConnector.connect();
function fireloop(num){
for (i = 0; i < num; i++) { 
    setTimeout(function(){ThunderConnector.command('fire');},1 * 4000 * i);
}
}

num = process.argv[2] || 10;
fireloop(num);

This is a project I have been working on and creating for my seocnd trimester of software developement at Seattle Academy in Seattle Washington. I have spen around 45 minutes on it each day for the past 2 school weeks. 


To install: 
 *Enter folder in which you wish to install
 *Type "sudo su" to become super user
 *Type "npm install "echo-missile"
 *Type "sudo npm install node-hid"
 *After install type "cd node_modules"
 *Type "cd echo-missile"
 *Type "ls"
 *Here you will see all the files
 *Type "sudo node "file name""
 
 License: MIT