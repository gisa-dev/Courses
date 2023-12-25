// Esto solo en los modulos nativos
// que no tienen promesas nativas

// const fs = require('node:fs');
// const {promisify} = require('node:util');
// const readFilePromise = promisify(fs.readFile);

const fs = require('node:fs/promises');

console.log('leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8').then((data) => console.log(data));

console.log('Hacer cosas mientras se lee el primer archivo...');

console.log('leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8').then((data) => console.log(data));
