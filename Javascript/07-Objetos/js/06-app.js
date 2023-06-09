const producto = {
	nombre: 'Monitor 20 Pulgadas',
	precio: 300,
	disponible: true,
	informacion: {
		medidas: {
			peso: '1kg',
			medida: '1m',
		},
		fabricacion: {
			pais: 'China',
		},
	},
};
console.log(producto);
console.log(producto.informacion);

const {
	informacion,
	informacion: {
		fabricacion,
		fabricacion: { pais },
	},
} = producto;

// const { fabricacion, medidas } = informacion;

console.log(informacion);
console.log(fabricacion);
console.log(pais);
