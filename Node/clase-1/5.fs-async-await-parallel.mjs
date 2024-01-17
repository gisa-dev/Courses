// Esto solo en los modulos nativos
// que no tienen promesas nativas

// const fs = require('node:fs');
// const {promisify} = require('node:util');
// const readFilePromise = promisify(fs.readFile);

import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./archivo.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, segundoText]) => {
  console.log('Primer Texto: ', text)
  console.log('Segundo Texto: ', segundoText)
})
