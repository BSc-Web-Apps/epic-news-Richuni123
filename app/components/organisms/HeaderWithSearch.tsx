import { Link, NavLink, useMatches } from '@remix-run/react'
import NavLogo from '../molecules/NavLogo'
import { SearchBar } from '../molecules/SearchBar'
import LoginOrUserDropdown from './LoginOrUserDropdown'

interface HeaderWithSearchProps {
	isAdminUser: boolean
}

export default function HeaderWithSearch({
	isAdminUser,
}: HeaderWithSearchProps) {
	const matches = useMatches()
	const isOnSearchPage = matches.find(m => m.id === 'routes/users+/index')
	const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />

	return (
		<header className=" bg-red-600 pb-4 lg:py-16">
			<nav className="container flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
				<NavLink to="/">
					<NavLogo />
				</NavLink>

				<div className="flex flex-1 items-center justify-center gap-8">
					{isAdminUser && (
						<Link
							to="/admin-review"
							className="bg-red-850 rounded-lg px-4 py-2 text-sm font-semibold text-foreground text-white transition hover:bg-red-700"
						>
							Admin Review
						</Link>
					)}
					<NavLink
						to="/news"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-4xl text-black underline underline-offset-8' : 'text-4xl text-white'}`
						}
					>
						News
					</NavLink>

					<NavLink
						to="/contact-us"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-4xl text-black underline underline-offset-8' : 'text-4xl text-white'}`
						}
					>
						Contact us
					</NavLink>
				</div>

				<div className="flex gap-4">
					<div className="flex justify-center gap-8 lg:hidden">{searchBar}</div>
					<div className="flex items-center">
						<LoginOrUserDropdown />
					</div>
					<div className="hidden w-full lg:block ">{searchBar}</div>
				</div>
			</nav>
		</header>
	)
}
