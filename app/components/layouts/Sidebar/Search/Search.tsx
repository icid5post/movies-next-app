import React from 'react'

import style from './style.module.scss'
import {useSearch} from "@/components/layouts/Sidebar/Search/useSerach";
import SearchList from "@/components/layouts/Sidebar/Search/SearchList/SearchList";
import SearchField from "@/ui/SearchField/SearchField";

const Search: React.FC = () => {

	const {handleSearch, data, isSuccess, searchTerm} = useSearch()

	return <div className={style.wrapper}>
		<SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
		{
			isSuccess && <SearchList movies={data || []}/>
		}
	</div>
}

export default Search
