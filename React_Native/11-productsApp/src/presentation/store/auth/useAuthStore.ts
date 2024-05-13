import { create } from 'zustand'
import type { AuthStatus } from '../../../infrastructure/interfaces/auth.status'
import type { User } from '../../../domain/entities/user'
import {
	authCheckStatus,
	authLogin,
	authRegister
} from '../../../actions/auth/auth'
import { StorageAdapter } from '../../../config/adapters/storage-adapter'

interface AuthState {
	status: AuthStatus
	token?: string
	user?: User

	login: (email: string, password: string) => Promise<boolean>
	logout: () => Promise<void>
	checkStatus: () => Promise<void>
	register: (
		email: string,
		password: string,
		fullname: string
	) => Promise<boolean>
}

export const useAuthStore = create<AuthState>()((set, get) => ({
	status: 'checking',
	token: undefined,
	user: undefined,
	login: async (email: string, password: string) => {
		const resp = await authLogin(email, password)

		if (!resp) {
			set({ status: 'unauthenticated', token: undefined, user: undefined })
			return false
		}

		await StorageAdapter.setItem('token', resp.token)
		const token = await StorageAdapter.getItem('token')

		set({ status: 'authenticated', token: resp.token, user: resp.user })

		return true
	},

	logout: async () => {
		await StorageAdapter.removeItem('token')
		set({ status: 'unauthenticated', token: undefined, user: undefined })
	},

	checkStatus: async () => {
		const resp = await authCheckStatus()

		if (!resp) {
			set({ status: 'unauthenticated', token: undefined, user: undefined })
			return
		}

		// todo: save token in async storage
		await StorageAdapter.setItem('token', resp.token)
		const token = await StorageAdapter.getItem('token')
		console.log({ token })

		set({ status: 'authenticated', token: resp.token, user: resp.user })
	},

	register: async (email: string, password: string, fullname: string) => {
		const resp = await authRegister(email, password, fullname)

		if (!resp) {
			set({ status: 'unauthenticated', token: undefined, user: undefined })
			return false
		}

		// todo: save token in async storage
		await StorageAdapter.setItem('token', resp.token)
		const token = await StorageAdapter.getItem('token')
		console.log({ token })

		set({ status: 'authenticated', token: resp.token, user: resp.user })

		return true
	}
}))
