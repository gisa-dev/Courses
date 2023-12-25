// Esto solo en los modulos nativos
// que no tienen promesas nativas

// const fs = require('node:fs');
// const {promisify} = require('node:util');
// const readFilePromise = promisify(fs.readFile);

import {readFile} from 'node:fs/promises';

console.log('leyendo el primer archivo...');
const text = await readFile('./archivo.txt', 'utf-8');
console.log(text);

console.log('Hacer cosas mientras se lee el primer archivo...');

console.log('leyendo el segundo archivo...');
const segundoText = await readFile('./archivo2.txt', 'utf-8');
console.log(segundoText);
