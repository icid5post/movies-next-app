import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import MaterialIcon from '@/ui/MaterialIcon/MaterialIcon'

import { IMovie } from '@/shared/Types/Movies'

import { getGenresListEach } from '@/utils/movies/GetGenresList'

import { getGenreUrl, getMovieUrl } from '../../../../config/url.config'

import style from './style.module.scss'

const MovieItem: React.FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={style.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						draggable={false}
						alt={movie.title}
						width={65}
						height={97}
						src={movie.poster}
						priority
					/>
				</a>
			</Link>

			<div className={style.info}>
				<div className={style.title}>{movie.title}</div>
				<div className={style.genres}>
					{movie.genres.map((genre, index) => (
						<Link href={getGenreUrl(genre.slug)} key={genre._id}>
							<a>{getGenresListEach(index, movie.genres.length, genre.name)}</a>
						</Link>
					))}
				</div>
			</div>

			<div className={style.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.rating.toFixed(1)}</span>
			</div>
		</div>
	)
}

export default MovieItem
