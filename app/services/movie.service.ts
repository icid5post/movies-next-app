import { IMovie } from '@/shared/Types/Movies'

import { axiosDefault } from '../api/interseptors'
import { getMovieUrl, getMoviesUrl } from '../config/url.config'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosDefault.get<IMovie[]>(getMoviesUrl(), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getMostPopularMovies(){
		const {data: movies} = await axiosDefault.get<IMovie[]>(getMoviesUrl('/most-popular'))
	}
}
