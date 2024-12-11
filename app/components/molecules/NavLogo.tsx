import logo from '~/assets/svg/Vector.svg'

export default function NavLogo() {
	return (
		<div className="h-34 w-45 flex items-center justify-center rounded bg-red-600 p-6 hover:bg-red-800">
			<img src={logo} alt=" News Logo" className="w-16" />
		</div>
	)
}
