#!/usr/bin/env node

const program = require('commander')
const download = require('download-git-repo')

program
  .version('1.0.0', '-v --version')
  .command('init <name>')
  .action((name) => {
    download('davidkoojohn/koo-cli', name, function (err) {
      console.log(err ? 'Error' : 'Success')
    })
  })

program.parse(process.argv)

// run:$ node ./koo-cli/index.js init Hello
