const producto = {
	nombre: 'Monitor 20 Pulgadas',
	precio: 300,
	disponible: true,
};

const medidas = {
	peso: '1kg',
	medida: '1m',
};

console.log(producto);
console.log(medidas);

// usando el metodo Object.assign
const resultado = Object.assign(producto, medidas);

console.log(resultado);

// usando el operador spread p rest
const resultado2 = { ...producto, ...medidas };

console.log(resultado2);
