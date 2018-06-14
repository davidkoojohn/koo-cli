#!/usr/bin/env node

const program = require('commander')

program
  .version('1.0.0', '-v --version')
  .command('init <name>')
  .action((name) => {
    console.log('========')
    console.log(name)
    // console.log(process.argv)
    console.log('========')
  })

program.parse(process.argv)

// run:$ node ./koo-cli/index.js init Hello
