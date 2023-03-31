import { IconButton, InputBase } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsIcon from '@mui/icons-material/Settings'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import Searchbar from '../Searchbar'

const TopBar = (): JSX.Element => {
	return (
		<header
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				// paddingLeft: '15px',
				// paddingRight: '15px',
				// padding: '0 0 0 15px',
				margin: '15px',
				height: '30px',
				// width: '100%',
			}}
		>
			<Searchbar />

			<nav style={{ display: 'flex' }}>
				<DarkModeIcon />
				<NotificationsNoneIcon />
				<SettingsIcon />
				<PersonIcon />
			</nav>
		</header>
	)
}

export default TopBar
