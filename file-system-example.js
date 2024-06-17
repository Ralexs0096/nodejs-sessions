const fs = require('node:fs');

fs.readFile('./Ezra.txt', 'utf-8', (err,data) => {
    if(err){
        console.log('Something went wrong', err)
        return
    }
    console.log(data);
})

const content = "This is an example"

fs.writeFile('./ezra.txt', content, 'utf-8', (err) => {
    if (err) {
        console.error('Something Went Wrong', err)
        return
    }

    console.log('File Created Succesfully');
})

fs.unlink('./ezra.txt', (err) => {
    if(err){
        console.error('Something went wrong', err)
        return
    }

    console.log('File deleted');
})

const data = '\nthis is a message2';

fs.appendFile('./ezra.txt', data, 'utf-8', (err) => {
    if (err) {
        console.error('Something went wrong', err)
        return
    }
    console.log('Super!!')
})

fs.appendFileSync('./ezra.txt', data, 'utf-8')

