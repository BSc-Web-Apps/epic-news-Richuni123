import { json, useLoaderData, Link, type MetaFunction } from '@remix-run/react'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import { Button } from '#app/components/ui/button.tsx'
import heroImage from '~/assets/jpg/sample-hero.jpg'
import ArticleCard from '~/components/organisms/ArticleCard.tsx'
import { prisma } from '~/utils/db.server.ts'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export async function loader() {
	const allArticles = await prisma.article.findMany({
		where: { isPublished: true },
		orderBy: {
			publishedAt: 'desc', // Orders articles by the 'publishedAt' field in descending order
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true } },
		},
	})

	return json({ allArticles })
}
export default function Index() {
	const { allArticles } = useLoaderData<typeof loader>()

	return (
		<main className="  grid  h-full  place-items-center ">
			<HeroCallToAction
				image={heroImage}
				imageRight={true}
				hasBackgroundColour={true}
			>
				<div className="flex h-full flex-1 flex-col justify-between bg-white p-4 md:p-16">
					<div className="flex flex-col gap-8 text-center">
						<h2 className="text-h2">Welcome to the World of News</h2>
						<p className="text-lg">
							Stay informed with the latest updates from around the world. From
							breaking news to in-depth analysis, we provide everything you need
							to keep up-to-date with what matters most. Join our community and
							get exclusive access to news stories, features, and personalized
							content delivered right to your inbox.
						</p>
						<p className="text-lg">
							Don’t miss out—be the first to know when something big happens.
							Sign up now and get the latest updates directly from us!
						</p>
					</div>

					<Button
						asChild
						variant="default"
						size="lg"
						className=" mb-32 mt-6 md:mb-0 md:mt-0"
					>
						<Link to="/signup">Sign up</Link>
					</Button>
				</div>
			</HeroCallToAction>

			<div className="container mt-32 py-16 md:mt-0 md:py-24">
				<h2 className="mb-8 text-h2 font-normal">Latest news</h2>

				<div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{allArticles.length > 0 ? (
						allArticles.map(article => (
							<ArticleCard
								key={article.id}
								articleId={article.id}
								title={article.title}
								category={article.category?.name}
								imageId={article.images[0]?.id}
							/>
						))
					) : (
						<p>No articles found</p>
					)}
				</div>
			</div>
		</main>
	)
}
