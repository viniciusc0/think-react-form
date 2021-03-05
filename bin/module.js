#!/usr/bin/env node

const shell = require('child_process').execSync;
shell(`npm update think-react-form`);
// Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(process.execArgv.length + 2);

// Retrieve the first argument
var model = args[0];

shell(`mkdir -p src/pages`);
shell(`cp -r node_modules/think-react-form/lib/modules src `);

//CHECK PACKAGES DEPENDENTS
shell(`[ -d "node_modules/react-input-mask" ] || npm install react-input-mask`);
shell(`[ -d "node_modules/react-hook-form" ] || npm install react-hook-form`);
shell(`[ -d "node_modules/yup" ] || npm install yup`);
shell(`[ -d "node_modules/@hookform/resolvers" ] || npm install @hookform/resolvers`);
shell(`[ -d "node_modules/@material-ui/core" ] || npm install @material-ui/core`);
shell(`[ -d "node_modules/@material-ui/icons" ] || npm install @material-ui/icons`);
shell(`[ -d "node_modules/@material-ui/lab" ] || npm install @material-ui/lab`);
shell(`[ -d "node_modules/axios" ] || npm install axios`);
shell(`[ -d "node_modules/moment" ] || npm install moment`);
shell(`[ -d "node_modules/react-router-dom" ] || npm install react-router-dom`);

//CHECK AND CREATE DIRECTORY MODEL
shell(`[ -d "src/pages/${model}" ]  || cp -r node_modules/think-react-form/lib/page/ src/pages/${model} `);

//REPLACE MODEL NAME
var fs = require('fs')
var someFile = `src/pages/${model}/index.js`
fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/GENERATE_REACT/g, model);

  fs.writeFile(someFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});



var lib= require('../lib/index.js');

lib.say(model)