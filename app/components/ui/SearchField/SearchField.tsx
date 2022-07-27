import React, { ChangeEvent } from 'react'

import MaterialIcon from '@/ui/MaterialIcon/MaterialIcon'

import style from './style.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: React.FC<ISearchField> = ({ handleSearch, searchTerm }) => {
	return (
		<div className={style.search}>
			<MaterialIcon name="MdSearch" />
			<input
				type="text"
				placeholder="Search"
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	)
}

export default SearchField
