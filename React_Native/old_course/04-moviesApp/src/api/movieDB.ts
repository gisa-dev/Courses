import axios from 'axios';

const movieDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie',
	params: {
		api_key: '4db821d1716320e522f393ecd9c357ae',
		language: 'en-US',
	},
});

export default movieDB;
