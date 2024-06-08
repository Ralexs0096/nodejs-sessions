const fs = require('node:fs');

fs.readFile('./ezra.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Something went wrong', err)
    return
  }

  console.log(data);

})

const content = 'This is an example'

fs.writeFile('./ezra.txt', content, 'utf-8', (err) => {
  if (err) {
    console.error('Something went wrong', err)
    return
  }

  console.log("File created successfully");
})

fs.unlink('./ezra.txt', (err) => {
  if (err) {
    console.error('Something went wrong', err)
    return
  }

  console.log('File deleted');
})

const data = '\nthis is a message 3'

fs.appendFile('./ezra.txt', data, 'utf-8', (err) => {
  if (err) {
    console.error('Something went wrong', err)
    return
  }

  console.log(':)');
})


fs.appendFileSync('./ezra.txt', data, 'utf-8')
