import React from 'react'
import { Box } from '@mui/material'

import TopBar from './TopBar'
import Sidebar from './Sidebar'

type Props = {
	children: JSX.Element | null
}

const Layout = ({ children }: Props) => {
	return (
		<div
			className='app'
			style={{
				display: 'flex',
				width: '100%',
			}}
		>
			<Sidebar />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					width: '85%',
				}}
			>
				<TopBar />
				{children}
			</div>
		</div>
	)
}

export default Layout
