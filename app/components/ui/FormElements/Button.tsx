import cn from 'classnames'
import React from 'react'

import { IButton } from '@/ui/FormElements/form.interface'

import style from './style.module.scss'

const Button: React.FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(style.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
