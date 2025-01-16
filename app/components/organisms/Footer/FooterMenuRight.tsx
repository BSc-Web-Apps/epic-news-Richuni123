import { Link, NavLink } from '@remix-run/react'
import { Button } from '#app/components/atoms/Button'
import NavLogo from '#app/components/molecules/NavLogo.tsx'
import SocialMediaButtons from '#app/components/molecules/SocialMediaButtons'
import { type FooterProps } from './FooterBasic'

const FooterMenuRight = ({
	companyName = 'CHANGE THIS TO YOUR COMPANY NAME!',
	altText = 'Our company logo',
}: FooterProps) => {
	return (
		<footer className=" bg-red-600 lg:py-16">
			<div className="container items-center justify-between border-b border-red-950  py-8 lg:flex">
				<Link to="/" className="flex w-20 items-center justify-center lg:w-44">
					<NavLogo />
				</Link>

				<div className="lg:flex">
					<div className=" flex items-start gap-6 py-8 font-bold text-secondary-foreground lg:mr-24">
						<div>
							<NavLink
								to="/about-us"
								prefetch="intent"
								className="text-md font-semibold text-white transition hover:text-black"
							>
								About us
							</NavLink>
						</div>
						<div>
							<NavLink
								to="/contact-us"
								prefetch="intent"
								className="text-md font-semibold text-white transition hover:text-black"
							>
								Contact us
							</NavLink>
						</div>
					</div>

					<div className="flex items-center gap-6">
						<div className="lg:mr-4">
							<Link to="/signup">
								<Button>Sign Up</Button>
							</Link>
						</div>
						<div>
							<Link to="/login">
								<Button variant="secondary">Log In</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="container flex items-center justify-between py-8">
				<div className=" text-sm text-white">
					&copy; {companyName} | {new Date().getFullYear()}
				</div>
				<div className="flex w-20 items-center justify-center lg:w-24">
					<SocialMediaButtons />
				</div>
			</div>
		</footer>
	)
}

export default FooterMenuRight
