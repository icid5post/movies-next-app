import NextProgressBar from 'nextjs-progressbar'
import React, {ReactElement} from 'react'

import { accentColor } from '../config/constants'
import Favicons from "./HeadProvider/FavIcons";
import Head from "next/head";

const HeadProvider: React.FC<{children: ReactElement}> = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
            <Head>
                <meta charSet='UTF-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0'/>
                <Favicons/>

                <meta name='theme-color' content='#181B1E'/>

            </Head>
			{children}
		</>
	)
}

export default HeadProvider
