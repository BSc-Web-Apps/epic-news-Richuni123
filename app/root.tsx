import { type LinksFunction } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import { AuthenticityTokenProvider } from 'remix-utils/csrf/react'
import { HoneypotProvider } from 'remix-utils/honeypot/react'
import Document from '~/components/shared-layout/Document'
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
		<AuthenticityTokenProvider token={data.csrfToken}>
			<HoneypotProvider {...data.honeyProps}>
				<Document nonce={nonce} theme={theme}>
					<div className="flex h-screen flex-col justify-between ">
						<HeaderWithSearch isAdminUser={data.isAdminUser} />
						<div className="flex-1">
							<Outlet />
						</div>
						{/* <div className="container flex justify-between pb-5">
					<ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
				</div> */}
						<FooterMenuRight companyName="NEWS" altText="news logo" />
					</div>
				</Document>
			</HoneypotProvider>
		</AuthenticityTokenProvider>
	)
}
