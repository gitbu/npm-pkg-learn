const path = require('path');
const download = require('download-git-repo');
const ora = require('ora');

const spinner = ora();
const dest = path.resolve(__dirname, 'dest');

// url格式： owner/projectName#branchName(如果没有branchName的话默认是master)
spinner.start('loading')
download('gitbu/variable-name', dest, {}, () => {
  spinner.succeed('download success');
})
