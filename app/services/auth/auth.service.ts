import Cookies from 'js-cookie'

import { removeTokensStorage, saveToStorage } from '@/services/auth/auth.helper'

import { IAuthResponse } from '@/store/user/user.interface'

import { getContentType } from '../../api/api.helpers'
import { axiosDefault } from '../../api/interseptors'
import { getAuthUrls } from '../../config/api.config'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosDefault.post<IAuthResponse>(
			getAuthUrls('/register'),
			{ email, password }
		)
		if (response.data.accessToken) {
			// save to cookies
			saveToStorage(response.data)
		}
        return response
	},
	async login(email: string, password: string) {
		const response = await axiosDefault.post<IAuthResponse>(
			getAuthUrls('/login'),
			{ email, password }
		)
		if (response.data.accessToken) {
			// save to cookies
			saveToStorage(response.data)
		}

		return response
	},
	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axiosDefault.post<IAuthResponse>(
			getAuthUrls('/login/access-token'),
			{ refreshToken },
			{
				headers: getContentType(),
			}
		)

		if (response.data.accessToken) {
			// save to cookies
			saveToStorage(response.data)
		}

		return response
	},
}
