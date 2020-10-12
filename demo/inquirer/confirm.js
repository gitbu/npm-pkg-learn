const inquirer = require('inquirer');

inquirer.prompt({
  type: 'confirm',
  name: 'confrim',
  message: 'are you sure?'
}).then(answer => {
  console.log('answer: ', answer)
})

