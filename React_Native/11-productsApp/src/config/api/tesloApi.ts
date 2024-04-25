import axios from 'axios'
import { Platform } from 'react-native'
import { StorageAdapter } from '../adapters/storage-adapter'

export const API_URL =
	process.env.EXPO_PUBLIC_STAGE === 'prod'
		? process.env.EXPO_PUBLIC_API_URL
		: Platform.OS === 'ios'
		? process.env.EXPO_PUBLIC_API_URL_IOS
		: process.env.EXPO_PUBLIC_API_URL_ANDROID

const tesloApi = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

// todo: add interceptors

tesloApi.interceptors.request.use(

	async(config) => {

		const token = await StorageAdapter.getItem('token')

		if (token) {

			config.headers['Authorization'] = `Bearer ${token}`
		}

		return config
	}
)

export { tesloApi }
