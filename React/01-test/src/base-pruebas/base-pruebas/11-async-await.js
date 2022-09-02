export const getImagen = async () => {
	try {
		const apiKey = 'RbasP54MSw73L6FpQDWv6pdSCYMalzz5';
		const resp = await fetch(
			`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
		);
		const {data} = await resp.json();

		const {url} = data.images.original;

		return url;
	} catch (error) {
		return 'No se encontro la imagen';
	}
};

getImagen();
