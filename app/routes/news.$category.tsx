import { invariant } from '@epic-web/invariant'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import ArticleCard from '~/components/organisms/ArticleCard.tsx'
import { prisma } from '~/utils/db.server.ts'
import { toTitleCase } from '~/utils/stringUtils.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { category } = params

	invariant(typeof category === 'string', 'Category not found')
	const categoryTitle = toTitleCase(category)

	// Filter only published articles
	const filteredArticles = await prisma.article.findMany({
		where: {
			category: {
				slug: category, // Retrieves only articles in the specified category
			},
			isPublished: true, // Add this filter to show only published articles
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ categoryTitle, filteredArticles })
}

export default function NewsCategoryPage() {
	const { categoryTitle, filteredArticles } = useLoaderData<typeof loader>()
	return (
		<>
			<div className="container py-16">
				<h2 className="pb-10 text-h2">{categoryTitle}</h2>

				<div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7">
					{/* Handle no articles found */}
					{filteredArticles.length === 0 ? (
						<p>No published articles in this category</p>
					) : (
						filteredArticles.map(article => (
							<ArticleCard
								key={article.id}
								articleId={article.id}
								title={article.title}
								category={article.category?.name}
								imageId={article.images[0]?.id}
							/>
						))
					)}
				</div>
			</div>
		</>
	)
}
