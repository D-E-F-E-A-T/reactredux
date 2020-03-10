import axios from 'axios';

const api = axios.create({
	baseURL: 'http://jsonplaceholder.typicode.com'
});

// Add a request interceptor
api.interceptors.request.use(
	config => {
		config.headers.grupoId = 1;
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

export default api;
