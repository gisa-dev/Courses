const producto = {
	nombre: 'Monitor 20 Pulgadas',
	precio: 300,
	disponible: true,
	mostrarInfo: function () {
		console.log(
			`El Producto: ${this.nombre} tiene un precio de: ${this.precio}.`,
		);
	},
};

producto.mostrarInfo();
