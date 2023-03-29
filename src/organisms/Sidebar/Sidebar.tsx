import React, { useContext, useState } from 'react'
import { Box, IconButton, InputBase, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HomeIcon from '@mui/icons-material/Home'
import PeopleIcon from '@mui/icons-material/People'
import ContactsIcon from '@mui/icons-material/Contacts'
import ReceiptIcon from '@mui/icons-material/Receipt'
import PersonIcon from '@mui/icons-material/Person'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import HelpIcon from '@mui/icons-material/Help'
import SidebarHeader from '../../molecules/SidebarHeader'
import './Sidebar.scss'
import '../../index.scss'
import Profile from '../../molecules/Profile'

type Props = {}

const Sidebar = (props: Props) => {
	const [isCollapsed, setIsCollapsed] = useState(false)
	const [selected, setSelected] = useState('Dashboard')

	return (
		<aside className='sidebar'>
			<SidebarHeader
				title='ADMINIS'
				onClick={() => setIsCollapsed(!isCollapsed)}
			/>
			<Profile
				image='../../assets/user.jpg'
				name='Ed Roh'
				role='VP Fancy Admin'
			/>

			{/* User */}
			{!isCollapsed && (
				<Box mb='25px'>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img
							alt='user profile'
							width='100px'
							height='100px'
							src='../../assets/user.jpg'
							style={{
								cursor: 'pointer',
								borderRadius: '50%',
							}}
						/>
					</Box>
				</Box>
			)}
		</aside>
	)
}

export default Sidebar
