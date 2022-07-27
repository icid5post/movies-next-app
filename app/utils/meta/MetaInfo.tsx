import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import { MetaInterface } from '@/utils/meta/meta.interface'

import { siteName, titleMerge } from '../../config/seo.config'

import logoImage from '@/assets/images/logo.svg'

const MetaInfo: React.FC<MetaInterface> = ({
	title,
	description,
	image,
	children,
}) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`
	return (
		<Head>
			<title itemProp="headline">{titleMerge(title)}</title>
			{description ? (
				<>
					<meta
						itemProp="description"
						name="description"
						content={description}
					/>
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || logoImage} />
					<meta property="og:site_name" content={siteName} />
				</>
			) : (
				<meta name="robots" content="noindex, nofollow" />
			)}

			{children}
		</Head>
	)
}

export default MetaInfo
