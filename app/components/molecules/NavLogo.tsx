import logo from '~/assets/svg/Vector.svg'

export default function NavLogo() {
	return (
		<div className="flex h-auto w-44 items-center justify-center rounded bg-red-600 p-6 hover:bg-red-700">
			<img src={logo} alt=" News Logo" />
		</div>
	)
}
