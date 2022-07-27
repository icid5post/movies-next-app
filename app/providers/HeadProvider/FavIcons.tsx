import React from 'react'

const Favicons = () => {
	return (
		<>
            {/*https://iconifier.net/*/}
			<link
				rel="shortcut icon"
				href="/favicons/favicon.ico"
				type="image/x-icon"
			/>
			<link
				rel="apple-touch-icon"
				href="/favicons/apple-touch-icon.png"
				type="image/x-icon"
			/>
			<link
				rel="apple-touch-icon"
                sizes='57x57'
				href="/favicons/apple-touch-icon-57x57.png"
				type="image/x-icon"
			/>
            <link
                rel="apple-touch-icon"
                sizes='72x72'
                href="/favicons/apple-touch-icon-72x72.png"
                type="image/x-icon"
            />
            <link
                rel="apple-touch-icon"
                sizes='76x76'
                href="/favicons/apple-touch-icon-76x76.png"
                type="image/x-icon"
            />
            <link
                rel="apple-touch-icon"
                sizes='114x114'
                href="/favicons/apple-touch-icon-114x114.png"
                type="image/x-icon"
            />
		</>
	)
}

export default Favicons
