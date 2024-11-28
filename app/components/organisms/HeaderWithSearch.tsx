import { Link, NavLink, useMatches } from '@remix-run/react'
import NavLogo from '../molecules/NavLogo'
import { SearchBar } from '../molecules/SearchBar'
import LoginOrUserDropdown from './LoginOrUserDropdown'

export default function HeaderWithSearch() {
	const matches = useMatches()
	const isOnSearchPage = matches.find(m => m.id === 'routes/users+/index')
	const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />

	return (
		<header className=" bg-red-600 lg:py-16">
			<nav className="container flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
				<NavLink to="/">
					<NavLogo />
				</NavLink>

				<div className="flex flex-1 justify-center gap-8">
					<NavLink
						to="/news"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-black underline underline-offset-8' : 'text-white'}`
						}
					>
						News
					</NavLink>
					<NavLink
						to="/sport"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-black underline underline-offset-8' : 'text-white'}`
						}
					>
						Sport
					</NavLink>
					<NavLink
						to="/business"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-black underline underline-offset-8' : 'text-white'}`
						}
					>
						Business
					</NavLink>

					<NavLink
						to="/entertainment"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-black underline underline-offset-8' : 'text-white'}`
						}
					>
						Entertainment
					</NavLink>
					<NavLink
						to="/contact-us"
						prefetch="intent"
						className={({ isActive }) =>
							`${isActive ? 'text-black underline underline-offset-8' : 'text-white'}`
						}
					>
						Contact us
					</NavLink>
				</div>

				<div className="flex flex-1 justify-center gap-8">{searchBar}</div>
				<div className="flex items-center gap-10">
					<LoginOrUserDropdown />
				</div>
				<div className="block w-full sm:hidden">{searchBar}</div>
			</nav>
		</header>
	)
}
