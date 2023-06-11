// Object Literal
const producto = {
	nombre: 'Monitor 20 Pulgadas',
	precio: 300,
	disponible: true,
};

function Producto(nombre, precio) {
	this.nombre = nombre;
	this.precio = precio;
	this.disponible = true;
}

const producto2 = new Producto('Tablet', 500);

console.log(producto2);
