#!/usr/bin/env node

'use strict';

require('date-utils');
const exec    = require('child_process').exec;
const program = require('commander');

// set program info
program
  .version('0.9.0')
  .usage('[options] <fileName>\n         then create fileName.YYYYMMDD')
  .option('-o, --org', 'create fileName.org')
  .option('-b, --bak', 'create fileName.bak')
  .option('-d, --detail', 'create fileName.YYYMMDDHHmmss')
  .parse(process.argv);

// display HELP
if(!program.args.length) {
  program.help();
}

// options
let fileExtension;
let dt = new Date();
if (program.org) {
  fileExtension = 'org';
}
else if (program.bak) {
  fileExtension = 'bak';
}
else if (program.detail) {
  fileExtension = dt.toFormat("YYYYMMDD");
}
else {
  fileExtension = dt.toFormat("YYYMMDDHH24MISS");
}

// file name for copy
let fileName         = program.args;
let backupFileName = `${fileName}.${fileExtension}`;

// file backup at shell script
exec(`cp -p ${fileName} ${backupFileName}`, (err, stdout, stderr) => {
  if(stderr.length > 0) {
    console.log(stderr);
  }
  else {
    console.log(`created: ${backupFileName}`);
  }
});
