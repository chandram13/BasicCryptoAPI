#!/usr/bin/env node

const cli = require('nodemon/lib/cli');
const nodemon = require('nodemon/lib');
const options = cli.parse(process.argv);

nodemon(options);

const fs = require('fs');

// checks for available update and returns an instance
const pkg = JSON.parse(fs.readFileSync(__dirname + '/../package.json'));

if (pkg.version.indexOf('0.0.0') !== 0 && options.noUpdateNotifier !== true) {
  require('simple-update-notifier')({ pkg });
}
