import { invariantResponse } from '@epic-web/invariant'
import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import SingleArticle from '#app/components/organisms/SingleArticle.tsx'
import { prisma } from '~/utils/db.server.ts'

export async function loader({ params }: LoaderFunctionArgs) {
	const { articleId } = params

	invariantResponse(typeof articleId === 'string', 'No article ID provided')

	// Fetch the article by ID
	const article = await prisma.article.findUnique({
		where: { id: articleId },
		select: {
			id: true,
			title: true,
			content: true,
			category: { select: { name: true } },
			owner: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ article })
}
const ArticleNotFound = () => {
	return (
		<div className="container flex h-full flex-1 flex-col items-center justify-center">
			<h2 className="pb-8 text-center text-h2">No article found 🤔</h2>
			<p className="text-center text-xl">
				Please check the article ID in your browser and try again.
			</p>
		</div>
	)
}

export default function ArticlePage() {
	const { article } = useLoaderData<typeof loader>()
	return article ? <SingleArticle article={article} /> : <ArticleNotFound />
	return article ? (
		<div className="container py-16">
			<h2 className="pb-8 text-h2">{article.title}</h2>
		</div>
	) : (
		<ArticleNotFound />
	)
}