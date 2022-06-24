import React, { ReactElement } from 'react'

import Navigation from '@/components/layouts/Navigation/Navigation'
import Sidebar from '@/components/layouts/Sidebar/Sidebar'

import style from './style.module.scss'

interface Props {
	children: ReactElement
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className={style.layout}>
			<Navigation />
			<div className={style.center}>
				{children}
			</div>
			<Sidebar />
		</div>
	)
}

export default Layout
