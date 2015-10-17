#!/usr/bin/env node


'use strict';

require('date-utils');
var exec = require('child_process').exec;
var program = require('commander');

// set program info
program.version('0.0.1').usage('[options] <fileName>\n         then create fileName.YYYYMMDD').option('-o, --org', 'create fileName.org').option('-b, --bak', 'create fileName.bak').option('-d, --detail', 'create fileName.YYYMMDDHHmmss').parse(process.argv);

// display HELP
if (!program.args.length) {
  program.help();
}

// options
var fileExtension = undefined;
var dt = new Date();
if (program.org) {
  fileExtension = 'org';
} else if (program.bak) {
  fileExtension = 'bak';
} else if (program.detail) {
  fileExtension = dt.toFormat("YYYYMMDD");
} else {
  fileExtension = dt.toFormat("YYYMMDDHH24MISS");
}

// file name for copy
var fileName = program.args;
var backupFileName = fileName + '.' + fileExtension;

// file backup at shell script
exec('cp -p ' + fileName + ' ' + backupFileName, function (err, stdout, stderr) {
  if (stderr.length > 0) {
    console.log(stderr);
  } else {
    console.log('created: ' + backupFileName);
  }
});
