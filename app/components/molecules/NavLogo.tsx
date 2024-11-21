import logo from '~/assets/svg/Vector.svg'

export default function NavLogo() {
	return (
		<div className="flex h-20 w-28 items-center justify-center rounded bg-red-600 p-6">
			<img src={logo} alt=" News Logo" className="w-16" />
		</div>
	)
}
