import { useLocation } from '@remix-run/react'
import { FiFacebook as Facebook, FiTwitter as Twitter } from 'react-icons/fi'
import { FacebookShareButton, TwitterShareButton } from 'react-share'

/*
  For more information on how to use React Share, visit
  https://github.com/nygardk/react-share#react-share,
  or my tutorial at
  https://web-dev-wizard-fly.fly.dev/remix/adding-npm-packages/react-share
*/

export default function ShareButtons() {
	const { pathname } = useLocation()
	const currentUrl = `http://localhost:3000${pathname}`

	const sharedStyles =
		'stroke-black hover:stroke-muted-foreground dark:stroke-black dark:hover:stroke-muted-foreground'

	return (
		<div className="flex items-center">
			<FacebookShareButton url={currentUrl}>
				<Facebook className={sharedStyles} />
			</FacebookShareButton>
			<TwitterShareButton url={currentUrl}>
				<Twitter className={`ml-3 ${sharedStyles}`} />
			</TwitterShareButton>
		</div>
	)
}
