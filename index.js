// by requiring `babel/register`, all of our successive `require`s will be Babel'd
require("babel-register");
require('./schema.js');
require('./server.js');
