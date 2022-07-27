import cn from 'classnames'
import React from 'react'
import Sceleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SceletonLoader: React.FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Sceleton
			{...rest}
			baseColor="#1F2125"
			highlightColor="#292A2E"
			className={cn('rounded-lg', className)}
		/>
	)
}

export default SceletonLoader
