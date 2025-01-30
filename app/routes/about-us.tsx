export default function AboutUsRoute() {
	return (
		<main className="container py-16">
			<div className="flex flex-col items-center md:flex-row">
				<div className="order-2 flex-1 md:order-1">
					<h1 className="text-mega">About us</h1>
					<h3 className="mt-10 text-4xl">Currently under construction</h3>
					<p className="mr-0 mt-8 text-xl md:mr-40">
						We are working hard to bring you a better experience. Please check
						back soon!
					</p>
				</div>
				<div className="order-1 mt-8 flex-1 md:order-2 md:mt-0">
					<img
						src="/app/assets/jpg/under-construction2.jpg"
						alt="under construction"
						className="h-auto w-full object-contain"
					/>
				</div>
			</div>
			<div className="mx-auto my-8 w-[80%] border-t-2 border-black"></div>
		</main>
	)
}
