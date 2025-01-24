import { NavLink, Outlet } from '@remix-run/react'

export default function NewsPage() {
	return (
		<main className="container py-16">
			<h1 className="text-mega">News</h1>
			<div className="flex space-x-4 py-4">
				<NavLink
					to="business"
					prefetch="intent"
					className={({ isActive }) =>
						`${isActive ? 'text-2xl text-red-500 underline underline-offset-8' : 'text-2xl text-black'}`
					}
				>
					Business
				</NavLink>
				<NavLink
					to="sport"
					prefetch="intent"
					className={({ isActive }) =>
						`${isActive ? 'text-2xl text-red-500 underline underline-offset-8' : 'text-2xl text-black'}`
					}
				>
					Sport
				</NavLink>
				<NavLink
					to="entertainment"
					prefetch="intent"
					className={({ isActive }) =>
						`${isActive ? 'text-2xl text-red-500 underline underline-offset-8' : 'text-2xl text-black'}`
					}
				>
					Entertainment
				</NavLink>
			</div>
			<Outlet />
		</main>
	)
}
