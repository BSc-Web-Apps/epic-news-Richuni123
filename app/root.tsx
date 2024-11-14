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
						<p className="text-base text-gray-600 md:text-lg lg:text-2xl">
							Welcome to Epic News, where the latest developments in tech are
							found.
						</p>

						<div className="flex gap-8">
							<button className="rounded bg-red-500 px-10 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:px-6 md:px-8 lg:px-10 xl:px-12">
								Click Me
							</button>

							<button className="rounded bg-red-500 px-10 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:px-6 md:px-8 lg:px-10 xl:px-12">
								Click Me
							</button>
							<button className="rounded bg-red-500 px-10 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:px-6 md:px-8 lg:px-10 xl:px-12">
								Click Me
							</button>
						</div>
					</main>
				</div>
				<div className="container flex justify-between pb-5">
					<ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
				</div>
				<FooterMenuRight />
			</div>
		</Document>
	)
}
