import React from 'react'

import MoviesContainer from '@/components/layouts/Sidebar/MoviesContainer/MoviesContainer'
import Search from '@/components/layouts/Sidebar/Search/Search'

import style from './style.module.scss'

const Sidebar = () => {
	return (
		<div className={style.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
