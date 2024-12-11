import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { NavLink, Outlet, useLoaderData } from '@remix-run/react'
import { prisma } from '~/utils/db.server.ts'
import { cn } from '~/utils/misc.tsx'
import { requireUserWithRole } from '~/utils/permissions.server.js'
import { Button } from '~/components/atoms/Button.js'
import { GeneralErrorBoundary } from '~/components/ErrorBoundary.js'

export async function loader({ request }: LoaderFunctionArgs) {
	await requireUserWithRole(request, 'admin')

	const allArticles = await prisma.article.findMany({
		select: { id: true, title: true, isPublished: true },
	})

	return json({ allArticles })
}

interface StatusPillProps {
	isPublished: boolean
}

export function StatusPill({ isPublished }: StatusPillProps) {
	return (
		<div
			className={`rounded-full px-3 py-1 text-xs font-semibold ${
				isPublished ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
			}`}
		>
			{isPublished ? 'P' : 'D'}
		</div>
	)
}

export default function ArticlesRoute() {
	const { allArticles } = useLoaderData<typeof loader>()

	const navLinkDefaultClassName =
		'line-clamp-2 block rounded-l-full py-2 pl-8 pr-6 text-base lg:text-xl text-gray-900 hover:text-white hover:bg-red-600 transition-all'

	return (
		<main className="container mx-auto flex min-h-screen px-4 py-12 md:px-8">
			<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-4">
				{/* Sidebar */}
				<div className="relative col-span-1 rounded-lg bg-gray-300 p-4 shadow-lg">
					<h2 className="mb-4 text-xl font-semibold">Articles</h2>
					<ul className="space-y-2 overflow-y-auto">
						{allArticles.map(article => (
							<li key={article.id} className="flex items-center gap-3">
								<StatusPill isPublished={article.isPublished} />
								<NavLink
									to={article.id}
									preventScrollReset
									prefetch="intent"
									className={({ isActive }) =>
										cn(
											navLinkDefaultClassName,
											isActive && 'bg-red-600 text-white',
										)
									}
								>
									{article.title}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				{/* Main Content */}
				<div className="relative col-span-3 rounded-lg bg-white p-6 shadow-xl">
					<h2 className="mb-6 text-3xl font-bold">Article Details</h2>
					<Outlet />
				</div>
			</div>
		</main>
	)
}

export function ErrorBoundary() {
	return (
		<GeneralErrorBoundary
			statusHandlers={{
				403: () => (
					<div className="py-8 text-center">
						<h2 className="mb-4 text-2xl font-semibold">Access Denied</h2>
						<p>You are not allowed to access this page.</p>
						<p className="mb-4">
							Please log in with an administrator account, or contact support.
						</p>
						<Button>
							<NavLink to="/login">Login</NavLink>
						</Button>
					</div>
				),
			}}
		/>
	)
}
