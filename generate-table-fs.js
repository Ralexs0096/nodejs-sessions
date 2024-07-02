const fs = require('node:fs')

const NUM_TABLE = 9

const generateTable = (num) => {
  let content = `Tabla del ${num}\n\n`

  for (let i = 1; i <= 10; i++) {
    content += `${num} X ${i} = ${num * i}\n`
  }

  return content
}

const data = generateTable(NUM_TABLE)

fs.writeFile(`./table-${NUM_TABLE}.txt`, data, 'utf-8', (err) => {
  if (err) {
    console.error('error', err)
    return
  }

  console.log(':)');
})
