
// replace
const producto = 'Monitor 20 pulgadas';
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));



// slice
console.log(producto.slice(0,10));
// console.log(producto.slice(2,1));


// Aternativa a slice

console.log(producto.substring(0,10));
console.log(producto.substring(2,1));


const usuario = 'Juan';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));