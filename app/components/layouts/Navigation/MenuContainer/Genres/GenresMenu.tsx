import React from 'react'

import { usePopularGengres } from '@/components/layouts/Navigation/MenuContainer/Genres/usePopularGengres'
import Menu from '@/components/layouts/Navigation/MenuContainer/Menu'

import SceletonLoader from '@/ui/SceletonLoader/SceletonLoader'

const GenresMenu: React.FC = () => {
	const { isLoading, data } = usePopularGengres()

	return (
		<div>
			{isLoading ? (
                <div className='mx-11 mb-6'>
                    <SceletonLoader count={5} className="h-7 mt-6" />
                </div>
			) : (
				<Menu menu={{ title: 'Genres', items: data || [] }} />
			)}
		</div>
	)
}

export default GenresMenu
