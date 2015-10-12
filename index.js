#!/usr/bin/env node


'use strict';

require('date-utils');
var exec = require('child_process').exec;

// not enough args
if (process.argv.length <= 2) {
  console.log("Usage: bkup file");
  console.log("so create file.YYYYMMDD");
  process.exit();
}

var dt = new Date();
var formatted = dt.toFormat("YYYYMMDD");

// file name for copy
var fileName = process.argv[2];
var fileNameWithDate = fileName + '.' + formatted;

// file backup at shell script
exec('cp -p ' + fileName + ' ' + fileNameWithDate, function (err, stdout, stderr) {
  if (stderr.length > 0) {
    console.log(stderr);
  } else {
    console.log('created: ' + fileNameWithDate);
  }
});
