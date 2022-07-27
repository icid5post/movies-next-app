import { IGenre } from '@/shared/Types/Movies'

import { axiosDefault } from '../api/interseptors'
import { getGenresUrls } from '../config/api.config'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosDefault.get<IGenre[]>(getGenresUrls('/popular'), {
			params: searchTerm ?
				{
					searchTerm
				}
				: {},
		})
	},
}
