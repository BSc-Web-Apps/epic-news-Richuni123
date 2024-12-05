import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import { Button } from '#app/components/ui/button.tsx'
import { Link, type MetaFunction } from '@remix-run/react'
import heroImage from '~/assets/jpg/sample-hero.jpg'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main className="  grid  h-full  place-items-center ">
			<HeroCallToAction
				image={heroImage}
				imageRight={true}
				hasBackgroundColour={true}
			>
				<div className="flex h-full flex-1 flex-col justify-between p-16">
					<div className="flex flex-col gap-8">
						<h2 className="text-h2">Welcome to Epic News</h2>
						<p className="text-lg">
							Keep up to date with the latest tech news.
						</p>
					</div>
					<Button asChild variant="default" size="lg">
						<Link to="/signup">Sign up</Link>
					</Button>
				</div>
			</HeroCallToAction>

			<p className="text-base text-gray-600 md:text-lg lg:text-2xl">
				Welcome to Epic News, where the latest developments in tech are found.
			</p>
		</main>
	)
}
