import { type LinksFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Document from '~/components/shared-layout/Document'
import ThemeSwitch from '~/components/shared-layout/ThemeSwitch'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'
import { type loader } from './__root.server'
import FooterMenuRight from './components/organisms/Footer/FooterMenuRight'
import HeaderWithSearch from './components/organisms/HeaderWithSearch'
import useTheme from './hooks/useTheme.tsx'
import HeroCallToAction from './components/organisms/Hero/HeroCallToAction.tsx'
import heroImage from '~/assets/jpg/sample-hero.jpg'
import { Button } from './components/atoms/Button.tsx'

export const links: LinksFunction = () => {
	return rootLinkElements
}
export { headers, meta } from './__root.client.tsx'
export { action, loader } from './__root.server.tsx'

export default function App() {
	const data = useLoaderData<typeof loader>()
	const nonce = useNonce()
	const theme = useTheme()

	return (
		<Document nonce={nonce} theme={theme}>
			<div className="flex h-screen flex-col justify-between">
				<HeaderWithSearch />
				<div className="flex-1">
					<main className="bg-white-300 container grid h-full place-items-center">
						<h1 className="text-mega">Welcome to the world of NEWS!</h1>
						<div className="w-full py-16">
							<HeroCallToAction
								image={heroImage}
								imageRight={true}
								hasBackgroundColour={true}
							>
								<div className="flex h-full flex-1 flex-col justify-between p-16">
									<div className="flex flex-col gap-8">
										<h2 className="text-h2">Welcome to Epic News</h2>
										<p className="text-lg">
											Keep up to date with the latest tech news.
										</p>
									</div>
									<Button asChild variant="default" size="lg">
										<Link to="/signup">Sign up</Link>
									</Button>
								</div>
							</HeroCallToAction>
						</div>
						<p className="text-base text-gray-600 md:text-lg lg:text-2xl">
							Welcome to Epic News, where the latest developments in tech are
							found.
						</p>
					</main>
				</div>
				<div className="container flex justify-between pb-5">
					<ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
				</div>
				<FooterMenuRight companyName="NEWS" altText="news logo" />
			</div>
		</Document>
	)
}
