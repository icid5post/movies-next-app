import cn from 'classnames'
import React, { forwardRef } from 'react'

import { IField } from '@/ui/FormElements/form.interface'

import styles from './style.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type, style, ...rest }, ref) => {
		console.log(error, 'test-rk')

		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} autoComplete="off" />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
