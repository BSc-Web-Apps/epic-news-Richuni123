interface HeroCallToActionProps {
	image: string
	imageRight?: boolean
	hasBackgroundColour?: boolean
	children: React.ReactNode
}

const HeroCallToAction = ({
	children,
	image,
	imageRight = false,
	hasBackgroundColour = false,
}: HeroCallToActionProps) => {
	return (
		<div className={`md:flex  ${imageRight && 'md:flex-row-reverse'}`}>
			<div className="relative flex h-96 items-center justify-center overflow-hidden md:h-[32rem] md:w-1/2">
				<h1 className="text-mega">Welcome to the world of NEWS!</h1>
				<img
					src={image}
					alt="A hero with a call to action."
					className="absolute min-h-full min-w-full object-cover object-center"
				/>
			</div>
			<div
				className={`relative flex h-96 items-center justify-center ${hasBackgroundColour ? `bg-secondary` : `bg-transparent`} md:h-[32rem] md:w-1/2`}
			>
				{children}
			</div>
		</div>
	)
}

export default HeroCallToAction
