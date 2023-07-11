// // Output a prompt
// process.stdout.write('prompt > ');

// // The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim(); // remove the newLine

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

// we can access the pwd function and store it in a variable like so
const pwd = require('./pwd');

// if a user enters 'pwd' as an argument, we can then call it
pwd();

// files will be an array of filenames, like ['bash.js', 'pwd.js']
fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('prompt > ');
    }
  });