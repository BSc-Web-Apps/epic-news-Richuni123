import { Link } from '@remix-run/react'
import { useOptionalUser } from '#app/utils/user'
import { Button } from '../atoms/Button'
import UserDropdown from '../molecules/UserDropDown'

// eslint-disable-next-line react/display-name
export default function () {
	const user = useOptionalUser()

	return (
		<>
			{user ? (
				<UserDropdown />
			) : (
				<Button asChild variant="default" size="lg">
					<Link to="/login">Log In</Link>
				</Button>
			)}
		</>
	)
}
