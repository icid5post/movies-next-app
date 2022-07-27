import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { IMovie } from '@/shared/Types/Movies'

import { getMovieUrl } from '../../../../../config/url.config'

import style from './style.module.scss'

const SearchList: React.FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={style.list}>
			{movies.length ? (
				<>
					{movies.map((movie) => (
						<Link href={getMovieUrl(movie.slug)} key={movie._id}>
							<a>
								<Image
									src={movie.poster}
									width={50}
									height={50}
									alt={movie.title}
									objectFit="cover"
									objectPosition="center"
								/>
								<span>{movie.title}</span>
							</a>
						</Link>
					))}
				</>
			) : (
				<div className="text-white text-center my-4">not found</div>
			)}
		</div>
	)
}

export default SearchList
