const program = require('commander');

console.log('process: ', process.argv);
program.parse(process.argv);

console.log('program: ', program.args);