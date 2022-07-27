import React from 'react'

import { IHomeInterface } from '@/screens/Home/Home.interface'

import Heading from '@/ui/Heading/Heading'

import MetaInfo from '@/utils/meta/MetaInfo'

const Home: React.FC<IHomeInterface> = () => {
	return (
		<>
			<MetaInfo title="Watch movies online" description="Home page" />
			<Heading
				title="Watch movies online"
				className="text-gray-500  mb-8 text-xl"
			/>
		</>
	)
}

export default Home
