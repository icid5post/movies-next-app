import React from 'react'
import { useQuery } from 'react-query'

import MoviesList from '@/components/layouts/Sidebar/MoviesContainer/MoviesList'

import SceletonLoader from '@/ui/SceletonLoader/SceletonLoader'

import { MovieService } from '@/services/movie.service'

const PopularMovies = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'sidebar-popular-movies',
		() => MovieService.getMostPopularMovies()
	)

	return (
		<div>
			{isLoading ? (
				<div className="mt-11">
					<SceletonLoader count={3} className="h-28 mt-4" />
				</div>
			) : (
				<MoviesList
					movies={popularMovies || []}
					link="/trending"
					title="Popular movies"
				/>
			)}
		</div>
	)
}

export default PopularMovies
