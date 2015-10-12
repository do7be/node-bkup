#!/usr/bin/env node

'use strict';

require('date-utils');
const exec = require('child_process').exec;

// not enough args
if (process.argv.length <= 2) {
  console.log("Usage: bkup file");
  console.log("then create file.YYYYMMDD");
  process.exit();
}

let dt = new Date();
let formatted = dt.toFormat("YYYYMMDD");

// file name for copy
let fileName         = process.argv[2];
let fileNameWithDate = `${fileName}.${formatted}`;

// file backup at shell script
exec(`cp -p ${fileName} ${fileNameWithDate}`, (err, stdout, stderr) => {
  if(stderr.length > 0) {
    console.log(stderr);
  }
  else {
    console.log(`created: ${fileNameWithDate}`);
  }
});
