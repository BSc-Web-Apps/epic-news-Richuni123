import { invariant } from '@epic-web/invariant'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { toTitleCase } from '~/utils/stringUtils.ts'
import { prisma } from '~/utils/db.server.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params
	invariant(typeof category === 'string', 'Category not found')

	const categoryTitle = toTitleCase(category)
	const allArticles = await prisma.article.findMany({
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ categoryTitle, allArticles })
}

export default function NewsCategoryPage() {
	const { categoryTitle, allArticles } = useLoaderData<typeof loader>()
	return (
		<>
			<div className="container py-16">
				<h2 className="text-h2">{categoryTitle}</h2>

				<div className="grid grid-cols-5 grid-rows-2 gap-6">
					{allArticles.map(article => (
						<div className=" bg-red-600 p-6" key={article.id}>
							<h3>{article.title}</h3>
							<p>{article.category?.name || 'General News'}</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
