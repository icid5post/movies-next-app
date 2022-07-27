import React from 'react'

import MenuItem from '@/components/layouts/Navigation/MenuContainer/MenuItem'

import { useAuth } from '@/hooks/useAuth'
import {getAdminHomeUrl, getAdminUrl} from "../../../../../config/url.config";

const AuthItems: React.FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
				</>
			) : (
				<>
					<MenuItem
						item={{
							icon: 'MdLogin',
							link: '/login',
							title: 'Login',
						}}
					/>
				</>
			)}

            {
                user?.isAdmin &&
                <MenuItem
                    item={{
                        icon: 'MdLock',
                        link: getAdminHomeUrl(),
                        title: 'Admin panel',
                    }}
                />
            }


		</>
	)
}

export default AuthItems
