import { type LinksFunction } from '@remix-run/node'
import Document from '~/components/shared-layout/Document'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'

export const links: LinksFunction = () => {
	return rootLinkElements
}
export { headers, meta } from './__root.client.tsx'
export { action, loader } from './__root.server.tsx'

export default function App() {
	const nonce = useNonce()

	return (
		<Document nonce={nonce}>
			<div className="flex h-screen flex-col justify-between">
				<div className="flex-1">
					<main className="bg-red-300 grid h-full place-items-center">
						<h1 className="text-mega">Welcome to the world of NEWS!</h1>
						<p className="text-base text-gray-600 md:text-lg lg:text-2xl">Welcome to Epic News, where the latest developments in tech are found.</p>
						<button class="bg-red-500 text-white py-2 px-10 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:px-6 md:px-8 lg:px-10 xl:px-12">
  Click Me
</button>
					</main>
				</div>
			</div>
		</Document>
	)
}
