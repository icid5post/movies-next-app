import React from 'react'

import FavoriteMovies from '@/components/layouts/Sidebar/MoviesContainer/FavoriteMovies/FavoriteMovies'
import PopularMovies from '@/components/layouts/Sidebar/MoviesContainer/PopularMovies'

const MoviesContainer = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	)
}

export default MoviesContainer
