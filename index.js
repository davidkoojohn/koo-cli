#!/usr/bin/env node

const program = require('commander')
const download = require('download-git-repo')
const inquirer = require('inquirer')

program
  .version('1.0.0', '-v --version')
  .command('init <name>')
  .action((name) => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'author',
        message: '请输入作者'
      }
    ]).then((answer) => {
      console.log(answer)
      download('davidkoojohn/koo-cli', name, function (err) {
        console.log(err ? 'Error' : 'Success')
      })
    })
  })

program.parse(process.argv)

// run:$ node ./koo-cli/index.js init Hello
